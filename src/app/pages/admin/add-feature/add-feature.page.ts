import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ApiService } from 'src/app/services/api-service.service';
import { config, UNITURL,URL } from '../../config/config';
import { Storage } from '@ionic/storage';
import { Plugins, CameraResultType, CameraOptions, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;


@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.page.html',
  styleUrls: ['./add-feature.page.scss'],
})
export class AddFeaturePage implements OnInit {

  private url: any = config.url;
  amenities: any = [];
  addAmenity: boolean = false;
  private addAmenityForm: FormGroup;
  token: string;
  amenityId: any = '';
  btnText: string = 'Add Feature';
  imageResponse: any = [];
  orgId: any;

  constructor(
    private _apiService: ApiService,
    private _fb: FormBuilder,
    private loader: LoaderService,
    private alertCtrl: AlertController,
    private _toast: ToastService,
    private storage : Storage,
    private zone: NgZone,
    public actionSheetController: ActionSheetController
  ) {
    this.addAmenityForm = this._fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
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
            this.getAmenities();
          }
        });
      }
    });
  }

  getAmenities() {
    if (this.token) {
          const params = {
            token: this.token,
            orgId : this.orgId
          }
          this._apiService.postRequest(this.url + UNITURL.amenities, params).subscribe(
            async (result) => {
              if (result.success) {
                console.log(result.data.list);
                this.amenities = result.data.list;
              }
            }
          ), (error) => {
            console.log(error.description);
          }
        
    }
  }
  add() {
    console.log('add');
    this.addAmenity = true;
    this.amenityId = '';
    this.btnText = 'Add Feature';
  }

  submit() {
    console.log(this.amenityId);
    let formValue = this.addAmenityForm.value;
    if (this.amenityId) {
      this.loader.present();
      const params = {
        amenityId: this.amenityId,
        token: this.token,
        name: formValue.name,
        description: formValue.description,
        images: this.imageResponse,
        orgId : this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.updateAmenity, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addAmenityForm.reset();
            this.addAmenity = false;
            this.getAmenities();
          }
          this.loader.dismiss();
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
    } else {
      const params = {
        token: this.token,
        name: formValue.name,
        description: formValue.description,
        images: this.imageResponse,
        orgId : this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.addAmenity, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addAmenityForm.reset();
            this.addAmenity = false;
            this.getAmenities();
          }
          this.loader.dismiss();
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
    }
  }

  editAmenity(amenity) {
    console.log(amenity.images);
    this.addAmenity = true;
    this.btnText = 'Update Feature';
    this.amenityId = amenity._id;
    this.addAmenityForm.controls['name'].setValue(amenity.name);
    this.addAmenityForm.controls['description'].setValue(amenity.description);
    this.imageResponse = amenity.images ? amenity.images  : [];
    console.log(this.imageResponse);
  }

  async deleteAmenityAlert(amenity){
    const alert = await this.alertCtrl.create({
      header: 'Delete Feature',
      message: 'Do you want to delete '+ amenity.name + ' from Features ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteAmenity(amenity._id);
          }
        }
      ]
    });

    await alert.present();
  }
  deleteAmenity(amenityId) {
    const params = {
      token: this.token,
      amenityId: amenityId,
      orgId : this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.deleteAmenity, params).subscribe(
      async (result) => {
        if (result.success) {
          this._toast.presentToast(result.message);
          this.getAmenities();
        }
      }
    ), (error) => {
      console.log(error.description);
      this._toast.presentToast(error.description);
    }
  }
  cancel() {
    this.addAmenity = !this.addAmenity;
  }


  deleteImage(i) {
    this.imageResponse.splice(i, 1);
  }

  async getImages() {
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
              this.imageResponse.push(response.data.url);
            });
          }
        }
      });
    }
  }
}
