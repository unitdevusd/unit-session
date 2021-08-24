import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, KEY, UNITURL, URL } from '../../config/config';
import { Storage } from '@ionic/storage';
import { Plugins, CameraResultType, CameraOptions } from '@capacitor/core';

const { Camera } = Plugins;


@Component({
  selector: 'app-edit-space',
  templateUrl: './edit-space.page.html',
  styleUrls: ['./edit-space.page.scss'],
})
export class EditSpacePage implements OnInit {

  editPlace: FormGroup;
  public lat: any;
  public long: any;
  imageResponse: any = [];
  url: any = config.url;
  options: any;
  place: any;
  addPlaceDesc: FormGroup;
  spaceTypeList: { id: string; name: string; }[];
  storageTypeList: { id: string; name: string; }[];
  timeSlotTypeList: { id: string; name: string; }[];
  acccessTypeList: { id: string; name: string; }[];
  selectedAccessType: any;
  selectedtimeSlotType: any;
  selectedStorageType: any;
  selectedspaceType: any;
  price: any;
  features: any;
  data: any;
  photo: any;
  base64Img: any;
  showPercentage: boolean = false;
  images: any = [];
  imageIndex: any;
  token: any;
  orgId: any;
  placeId: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _apiService: ApiService,
    public alert: ToastService,
    public loader: LoaderService,
    public refresh: GlobalService,
    public route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public storage: Storage,
    public zone: NgZone
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.formInit();
        this.placeId = params.special;
      }
    });
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) => {
          if (org) {
            this.token = session;
            this.orgId = org;
            this.placeMeta();
            this.getSinglePlace();
          }
        });
      }
    });
  }
  placeMeta() {
    if (this.token) {
      const params = {
        apiKey: KEY.apikey
      }
      this._apiService.postRequest(this.url + UNITURL.placeMeta, params).subscribe(
        async (result) => {
          if (result.success) {
            this.zone.run(() => {
            this.spaceTypeList = result.data.list.spaceType;
            this.acccessTypeList = result.data.list.accessType;
            this.features = result.data.list.amenities;
            this.storageTypeList = result.data.list.itemType;
            this.timeSlotTypeList = result.data.list.timeAccessType;
            });
          } else {
            this.alert.presentToast(result.message);
          }
        }
      )
    }

  }

  formInit() {
    this.editPlace = this.formBuilder.group({
        name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.nullValidator],
      lenght: ['', Validators.required],
      breadth: ['', Validators.required],
      height: ['', Validators.required],
      spaceType: ['', Validators.required],
      storeItems: ['', Validators.required],
      priceDaily: ['', Validators.required],
      priceWeekly: ['', Validators.required],
      priceMonthly:['', Validators.required],
      accessStatus: ['', Validators.required],
      timeAccessStatus: ['', Validators.required],
      discountFirstMonth: ['', Validators.required],
      discountPercentage: ['', Validators.required]
    });
  }

  getSinglePlace() {
    this.loader.present();
    if (this.token && this.placeId) {
      const params = {
        token: this.token,
        placeId: this.placeId,
        orgId: this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.editSpace, params).subscribe(
        async (result) => {
          if (result.success) {
            this.data = result.data.place;
            this.setFormValues(this.data);
            this.imageResponse = this.data.images;
            if (this.imageResponse && this.imageResponse.length) {
              for (let i = 0; i < this.imageResponse.length; i++) {
                if (i == 0) {
                  this.images.push({ name: 'Main image', url: this.imageResponse[i] });
                } else {
                  this.images.push({ name: `Image ${i + 1}`, url: this.imageResponse[i] })
                }
              }
            } else {
              this.images.push({ name: 'Main image', url: '' },
                { name: 'Image 2', url: '' });
                this.imageResponse = [];
            }
             this.loader.dismiss();
          } else {
            this.loader.dismiss();
            this.alert.presentToast(result.message);
          }
        }
      )
    } 
  }

  setFormValues(data) {
    this.zone.run(() => {
        this.long = data.loc.coordinates[0];
      this.lat = data.loc.coordinates[1];
      this.editPlace.controls['name'].patchValue(data.name);
      this.editPlace.controls['spaceType'].patchValue(data.spaceType);
      this.editPlace.controls['description'].patchValue(data.description);
      this.editPlace.controls['address'].patchValue(data.address);
      this.editPlace.controls['lenght'].patchValue(data.size.lenght);
      this.editPlace.controls['breadth'].patchValue(data.size.breadth);
      this.editPlace.controls['height'].patchValue(data.size.height);
      this.editPlace.controls['priceDaily'].patchValue(data.pricing.daily);
      this.editPlace.controls['priceWeekly'].patchValue(data.pricing.weekly);
      this.editPlace.controls['priceMonthly'].patchValue(data.pricing.monthly);
      this.editPlace.controls['storeItems'].patchValue(data.storeItems);
      this.editPlace.controls['accessStatus'].patchValue(data.accessStatus);
      this.editPlace.controls['timeAccessStatus'].patchValue(data.timeAccessStatus);
      this.editPlace.controls['discountFirstMonth'].patchValue(data.discountFirstMonth);
      if (data.discountFirstMonth == true) {
        this.showPercentage = true;
      }
      this.editPlace.controls['discountPercentage'].patchValue(data.discountPercentage);
      });
  }


  updateSpace() {
    if (this.token) {
      if (this.editPlace.value.discountFirstMonth == false) {
        this.editPlace.value.discountPercentage = 0;
      }
      const params = {
        token: this.token,
        orgId: this.orgId,
        placeId: this.data._id,
        name: this.editPlace.value.name,
        address: this.editPlace.value.address,
        loc: {
          type: "Point",
          coordinates: [
            this.long,
            this.lat
          ]
        },
        description: this.editPlace.value.description,
        size: {
          lenght: this.editPlace.value.lenght,
          breadth: this.editPlace.value.breadth,
          height: this.editPlace.value.height
        },
        spaceType: this.editPlace.value.spaceType,
        storeItems: this.editPlace.value.storeItems,
        images: this.imageResponse,
        videos: this.data.videos,
        publish: this.data.publish,
        amenities: this.data.amenities,
        index: 5,
        pricing: {
          daily: parseInt(this.editPlace.value.priceDaily),
          weekly: parseInt(this.editPlace.value.priceWeekly),
          monthly: parseInt(this.editPlace.value.priceMonthly)
        },
        accessStatus: this.editPlace.value.accessStatus,
        timeAccessStatus: this.editPlace.value.timeAccessStatus,
        discountFirstMonth: this.editPlace.value.discountFirstMonth,
        discountPercentage: this.editPlace.value.discountPercentage
      }
      this.addPlaceApi(params);
    }
  }

  async getImages(image, index) {
    const options: CameraOptions = {
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      height: 250,
      width: 250
    };
    const imageData = await Camera.getPhoto(options);
    if (imageData.base64String) {
      const base64 = 'data:image/jpeg;base64,' + imageData.base64String;
      this.loader.present();
      let params = {
        auth: {
          type: 'token',
          token: this.token,
          orgId: this.orgId
        },
        base64: base64,
        public: true
      };
      let url = this.url + URL.imageUpload;
      this._apiService.uploadBase64image(url, params).then((response: any) => {
        this.loader.dismiss();
        if (response.success) {
          if (response.data && response.data.url) {
            console.log(response.data.url);
            this.zone.run(() => {
              this.images[index].url = response.data.url;
              this.imageResponse.push(response.data.url);
            });
          }
        }
      });
    }
  }


  
  addPlaceApi(place) {
    console.log(this.imageResponse);
    if(this.imageResponse.length) {
      place.images = this.imageResponse;
    }
    this._apiService.postRequest(this.url + UNITURL.updateSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.alert.presentToast(result.message);
            this.editPlace.reset();
          }
          this.refresh.sendRefershScreen("refresh");
          this.loader.dismiss();
          this.router.navigate(['tabs/my-spaces']);
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this.alert.presentToast(error.description);
      }
  }
  accessTypeSelected() {
    console.log('1');

  }
  timeSlotSelected() {
    console.log('2');

  }
  storageSelected() {
    console.log('3');

  }
  spaceSelected() {
    console.log('4');
  }
  discountCheck() {
    console.log(this.editPlace.value['discountFirstMonth']);
    if (this.editPlace.value['discountFirstMonth'] == true) {
      this.showPercentage = true;
    } else {
      this.showPercentage = false;
    }
  }
  addMoreImages() {
    this.images.push(
      { name: `Image ${this.images.length + 1}`, url: '' }
    );
  }
  deleteImage(image, index) {
    this.images[index].url = '';
    this.imageResponse.pop(index);
    console.log(this.imageResponse);
  }

}
