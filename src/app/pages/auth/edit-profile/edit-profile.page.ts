import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, URL, KEY, UNITURL } from '../../config/config';
import { Plugins, CameraResultType, CameraOptions, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  editProfile: FormGroup;
  email: any;
  firstName: any;
  lastName: any;
  image: string;
  imageResponse: any;
  public url: any = config.url;
  token: any;
  base64Image: string;
  orgId: any;


  constructor(
    public formBuilder: FormBuilder,
    public storage: Storage,
    public _loader: LoaderService,
    public _apiService: ApiService,
    public _toast: ToastService,
    public _global: GlobalService,
    public alertCtrl: AlertController,
    public zone: NgZone
  ) {
    this.editProfile = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      // contact: new FormControl({ value: '', disabled: true }, Validators.nullValidator),
      description: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getUserData();
  }

  async presentAlert(options) {
    const alert = await this.alertCtrl.create({
      header: options.header ? options.header : 'Alert',
      message: options.message ? options.message : '',
      buttons: options.buttons
    });
    await alert.present();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.token = session;
        this.storage.get("org").then((org) =>{
          if(org){
            this.orgId = org;
          }
        });
      }
    });


    this.storage.get('user').then((user) => {
      if (user) {
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        if (user.profilePic == null) {
          this.image = "/assets/imgs/dummyUser.png";
          this.imageResponse = null;
        } else {
          this.image = user.profilePic;
          this.imageResponse = this.image;
        }
        this.editProfile.controls['firstName'].setValue(this.firstName);
        this.editProfile.controls['lastName'].setValue(this.lastName);
        this.editProfile.controls['description'].setValue('');
      }
    });
  }

  async getImages() {
    const options: CameraOptions = {
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      height: 128,
      width: 128
    };
    const image = await Camera.getPhoto(options);
    if (image.base64String) {
      const base64 = 'data:image/jpeg;base64,' + image.base64String;
      this._loader.present();
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
      console.log(url);
      this._apiService.uploadBase64image(url, params).then((response: any) => {
        this._loader.dismiss();
        if (response.success) {
          if (response.data && response.data.url) {
            this.zone.run(() => {
              this.image = response.data.url;
              this.imageResponse = response.data.url;
              this.updateProfile();
            });
          }
        } else {
          this.presentAlert({ header: "Error", message: response.message, buttons: ["Dismiss"] });
        }
      });
    }
  }

  updateProfile() {
    const params = {
      "auth": {
        "type": "token",
        "token": this.token,
      },
      "profile": {
        profilePic: this.imageResponse ? this.imageResponse : this.image,
        firstName: this.editProfile.value.firstName,
        lastName: this.editProfile.value.lastName,
      }
    };
    this._apiService.postRequest(this.url + URL.updateProfile, params).subscribe(async (result) => {
      if (result.success) {
        let user = {
          profile: result.data
        }
        this.storage.set("user", user.profile);
        this._global.sendData(user.profile);
        this._toast.presentToast(result.message);
      } else {
        this.presentAlert({ header: "Error", message: result.message, buttons: ["Close"] });
      }
    }, (err) => {
      this.presentAlert({ header: "Error", message: "Unable to process your request. Please try again later", buttons: ["Close"] });
    })
  }


}
