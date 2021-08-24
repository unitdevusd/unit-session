import { Component, NgZone, OnInit } from '@angular/core';
import { config, UNITURL,URL } from '../../config/config';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins, CameraResultType, CameraOptions, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-space-type',
  templateUrl: './space-type.page.html',
  styleUrls: ['./space-type.page.scss'],
})
export class SpaceTypePage implements OnInit {

  public url: any = config.url;
  placesType: any = [];
  addType: boolean = false;
  public addPlaceTypeForm: FormGroup;
  token: string;
  typeId: any = '';
  btnText: string = 'Add Space type';
  subtypes: any = [];
  imageResponse: any = [];
  orgId: any;

  constructor(
    public _api: ApiService,
    public _fb: FormBuilder,
    public loader: LoaderService,
    public alertCtrl: AlertController,
    public _toast: ToastService,
    public storage : Storage,
    public zone : NgZone
  ) {
    this.addPlaceTypeForm = this._fb.group({
      type: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      dailyMin :  new FormControl('', Validators.required),
      dailyMax:  new FormControl('', Validators.required),
      weeklyMin :  new FormControl('', Validators.required),
      weeklyMax :  new FormControl('', Validators.required),
      monthlyMin :  new FormControl('', Validators.required),
      monthlyMax :  new FormControl('', Validators.required),
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
            this.getType();
          }
        });
      }
    });
  }

  getType() {
    if (this.token) {
          const params = {
            token: this.token,
            orgId: this.orgId
          }
          this._api.postRequest(this.url + UNITURL.spaceTypeList, params).subscribe(
            async (result) => {
              if (result.success) {
                console.log(result.data.list);
                this.placesType = result.data.list;
              }
            }
          ), (error) => {
            console.log(error.description);
          }
        }
  }

  submit() {
    let formValue = this.addPlaceTypeForm.value;
    const prices = {
      daily : {
        min : formValue.dailyMin,
        max: formValue.dailyMax
      },
      monthly : {
        min : formValue.monthlyMin,
        max: formValue.monthlyMax
      },
      weekly : {
        min : formValue.weeklyMin,
        max: formValue.weeklyMax
      }
    };

    if (this.typeId) {
      this.loader.present();
      const params = {
        typeId: this.typeId,
        token: this.token,
        spaceType: formValue.type,
        prices : prices,
        description: formValue.desc,
        images: this.imageResponse,
        orgId : this.orgId
      }
      console.log(params);
      this._api.postRequest(this.url + UNITURL.updateSpaceType, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addPlaceTypeForm.reset();
            this.addType = false;
            this.getType();
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
        typeId: this.typeId,
        token: this.token,
        spaceType: formValue.type,
        prices : prices,
        description: formValue.desc,
        images: this.imageResponse,
        orgId: this.orgId
      }
      console.log(params);
      this._api.postRequest(this.url + UNITURL.spaceType, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addPlaceTypeForm.reset();
            this.addType = false;
            this.getType();
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
  cancel() {
    this.addType = !this.addType;
  }
  editType(placeType) {
    this.addType = true;
    this.btnText = 'Update Space type';
    this.typeId = placeType._id;
    console.log('@@@',placeType);
    this.addPlaceTypeForm.controls['type'].setValue(placeType.spaceType);
    this.addPlaceTypeForm.controls['desc'].setValue(placeType.description);
    this.addPlaceTypeForm.controls['dailyMin'].setValue(placeType.prices.daily.min);
    this.addPlaceTypeForm.controls['dailyMax'].setValue(placeType.prices.daily.max);
    this.addPlaceTypeForm.controls['weeklyMin'].setValue(placeType.prices.weekly.min);
    this.addPlaceTypeForm.controls['weeklyMax'].setValue(placeType.prices.weekly.max);
    this.addPlaceTypeForm.controls['monthlyMin'].setValue(placeType.prices.monthly.min);
    this.addPlaceTypeForm.controls['monthlyMax'].setValue(placeType.prices.monthly.max);
    console.log(placeType.images);
    this.imageResponse = placeType.images;
  };

  async deleteTypeAlert(property) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Space Type',
      message: 'Do you want to delete ' + property.type + ' from properties ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteType(property._id);
          }
        }
      ]
    });

    await alert.present();
  }
  deleteType(_id: any) {
    const params = {
      token: this.token,
      typeId: _id,
      orgId : this.orgId
    }
    this._api.postRequest(this.url + UNITURL.deleteSpaceType, params).subscribe(
      async (result) => {
        if (result.success) {
          this._toast.presentToast(result.message);
          this.getType();
        }
      }
    ), (error) => {
      console.log(error.description);
      this._toast.presentToast(error.description);
    }
  }
  add() {
    this.addType = true;
    this.typeId = '';
    this.addPlaceTypeForm.reset();
    this.btnText = 'Add Space type';
  }
  onSelectChange(ev) {
    this.subtypes = [];

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
      this._api.uploadBase64image(url, params).then((response: any) => {
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
