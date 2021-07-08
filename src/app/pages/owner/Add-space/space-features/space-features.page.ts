import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { config, KEY, UNITURL, URL } from 'src/app/pages/config/config';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';

import { Storage } from '@ionic/storage';
import { Plugins, CameraResultType, CameraOptions } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-space-features',
  templateUrl: './space-features.page.html',
  styleUrls: ['./space-features.page.scss'],
})
export class SpaceFeaturesPage implements OnInit {

  features: any = [];
  selectedAmenities: any = [];
  url: any = config.url;
  priviousPage: any;
  spaceDetails: any;
  spaceId: any;
  videoUrl: any = '';
  images = [
    { name: 'Main Image', url: '' },
    { name: 'Image 2', url: '' }
  ];
  imageResponse: any =[]; 
  imageIndex: any ;
  videoUrls : any = [];
  token: any;
  orgId: any;
  
  constructor(
    private router: Router,
    private _api: ApiService,
    private route: ActivatedRoute,
    public toast: ToastService,
    private loader: LoaderService,
    private _gs: GlobalService,
    public alrtCtrl: AlertController,
    public actionSheetController: ActionSheetController,
    private storage : Storage,
    private zone : NgZone
  ) { 

    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log(params);
        if (params.spaceDetails) {
          this.spaceDetails = JSON.parse(params.spaceDetails);
          if(this.spaceDetails._id){
            this.spaceId = this.spaceDetails._id;
          }
          this.priviousPage = params.priviousPage;
          setTimeout(() => {
            this.addSpaceInfo(this.spaceDetails);
          }, 500);
        }
      }
    });

  }

  ngOnInit() {
    this.getUserData();
  }


  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) =>{
          if(org){
            this.token = session;
            this.orgId = org;
            this.placeMeta();
          }
        });
      }
    });
  }


  addSpaceInfo(spaceDetails: any) {
    console.log(spaceDetails);
    console.log(spaceDetails.amenities);
    if (spaceDetails._id) {
      this.spaceId = spaceDetails._id;
    }
    if (spaceDetails.amenities) {
     
      console.log(this.features);
      this.features.map(x =>{
        spaceDetails.amenities.map(y =>{
          if(x._id === y._id){
            console.log('I n 68');
            x['selected']  = true;
          }
        });
      });
      console.log(this.features);
      // this.selectedAmenities = spaceDetails.amenities;
    }
  }

  async backAlert() {
    const alert = await this.alrtCtrl.create({
      header: 'Lose your data',
      message: 'You may loose your data. Are you sure that you want to start all over again?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Back',
          handler: () => {
            this.back();
          }
        }
      ]
    });
    await alert.present();
  }

  back() {
    if (this.priviousPage) {
      this.router.navigate(['tabs/my-spaces']);
    } else {
      this.router.navigate(['add-address']);
    }
  }


  saveListing() {
    if (this.selectedAmenities.length) {
       this.addSpace(4);
    }else{
      this.addSpace(3);
    }
  }


  addSpace(index) {
    if(this.videoUrl){
      this.videoUrls.push({ type: 'Video', url: this.videoUrl });
    }else{
      this.videoUrl = [];
    }
    if (this.token) {
      const params = {
        token: this.token,
        orgId: this.orgId,
        name: this.spaceDetails.name,
        address: this.spaceDetails.address,
        loc: this.spaceDetails.loc,
        description: this.spaceDetails.description,
        size: this.spaceDetails.size,
        spaceType: this.spaceDetails.spaceType,
        storeItems: this.spaceDetails.storeItems,
        accessStatus: this.spaceDetails.accessStatus,
        timeAccessStatus: this.spaceDetails.timeAccessStatus,
        index: index,
        pricing: this.spaceDetails.pricing,
        discountFirstMonth: this.spaceDetails.discountFirstMonth,
        discountPercentage: this.spaceDetails.discountPercentage,
        amenities: this.selectedAmenities,
        images: this.imageResponse,
        videos: this.videoUrls,
        additionalInfo : this.spaceDetails.additionalInfo
      }
      this.addPlaceApi(params);
    }
  }

  addPlaceApi(place) {
    console.log(this.spaceId);
    if (this.spaceId) {
      place['placeId'] = this.spaceId;
      this.updateSpace(place);
    } else {
      this.addNewPlace(place);
    }

  }

  backPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(this.spaceDetails),
        priviousPage: 'tabs/my-spaces'
      }
    };
    this.router.navigate(['space-description'], navigationExtras);
  }
  next(index) {
    if (this.token) {
      const params = {
        token: this.token,
        orgId: this.orgId,
        name: this.spaceDetails.name,
        address: this.spaceDetails.address,
        loc: this.spaceDetails.loc,
        description: this.spaceDetails.description,
        size: this.spaceDetails.size,
        spaceType: this.spaceDetails.spaceType,
        storeItems: this.spaceDetails.storeItems,
        accessStatus: this.spaceDetails.accessStatus,
        timeAccessStatus: this.spaceDetails.timeAccessStatus,
        index: index,
        pricing: this.spaceDetails.pricing,
        discountFirstMonth: this.spaceDetails.discountFirstMonth,
        discountPercentage: this.spaceDetails.discountPercentage,
        amenities: this.selectedAmenities,
        images: this.imageResponse,
        videos: this.videoUrls,
        additionalInfo : this.spaceDetails.additionalInfo
      }
      console.log(params);
      console.log('In space-features',this.spaceId);
      if(this.spaceId){
        params['_id'] = this.spaceId;
      }

      let navigationExtras: NavigationExtras = {
        queryParams: {
          spaceDetails: JSON.stringify(params),
          priviousPage: 'tab4'
        }
      };
      this.router.navigate(['space-publish'], navigationExtras);
    }
  }


  updateSpace(place: any) {
    console.log(place);
    // return;
    this.loader.present('Updating Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.updateSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this.loader.dismiss();
          this.router.navigate(['tabs/tab4']);
        }
      ), (error) => {
        this.loader.dismiss();
        this.toast.presentToast(error.description);
      }

  }
  addNewPlace(place: any) {
    this.loader.present('Adding Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.addSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this.loader.dismiss();
          this.router.navigate(['tabs/tab4']);
        }
      ), (error) => {
        this.loader.dismiss();
        this.toast.presentToast(error.description);
      }
  }



  onCheckChange(ev) {
    console.log(ev);
    if (ev.detail.checked == true) {
      this.selectedAmenities.push(ev.detail.value);
    } else {
      let newArray = this.selectedAmenities.filter(x => {
        return x !== ev.detail.value;
      });
      this.selectedAmenities = newArray;
    }
    console.log(this.selectedAmenities);
  }

  placeMeta() {
  
      const params = {
        apiKey : KEY.apikey
      }
      this._api.postRequest(this.url + UNITURL.placeMeta, params).subscribe(
        async (result) => {
          if (result.success) {
            this.features = result.data.list.amenities;
          }
        }
      )
    }

    async uploadImage(image,index){
      const options: CameraOptions = {
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        height: 250,
        width: 250
      };
      const imageData = await Camera.getPhoto(options);
      if (imageData.base64String) {
        const base64 = 'data:image/jpeg;base64,'+imageData.base64String;
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
          this._api.uploadBase64image(url, params).then((response: any) => {
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
    

  addMoreImages(){
    this.images.push(
     { name: `Image ${this.images.length + 1}`, url: ''}
    );
  }

  deleteImage(image,index){
    this.images[index].url = '';
    this.imageResponse.pop(index);
    console.log(this.imageResponse);
  }

}
