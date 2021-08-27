import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api-service.service';
import { countryCode } from 'src/app/utilities/countrycode';
import { URL, config, UNITURL } from '../../config/config';
import { AlertController, Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {

  referralForm: FormGroup;
  token: any;
  org: any;
  userId: any;
  url: any = config.url;
  countryList = countryCode;
  width: any;
  heigth: any;
  click : boolean = false;
  backgroundImage: any;

  constructor(
    private fb: FormBuilder,
    private storage: Storage,
    private _api: ApiService,
    private router: Router,
    platform: Platform,
    private loader: LoaderService,
    private alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      this.width = platform.width();
      this.heigth = platform.height();
    });
  }
  ngOnInit() {
    this.backgroundImage = '../../../../assets/imgs/place1.jpg';
    this.referralForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      contact: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      country_code: ['', [Validators.required]],
    });
    this.getUser();
  };

  getUser() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) => {
          if (org) {
            this.storage.get("loggedUserId").then((userId) => {
              this.userId = userId;
              this.org = org;
              this.token = session;
              const params = {
                "auth": {
                  "type": "token",
                  "token": this.token,
                  "orgId": this.org
                }
              };
              this.getCountyList(params);
            });
          }
        });
      }
    });
  }

  selectCountryCode($event) {
    console.log($event);
  }

  getCountyList(params) {
    this._api.postRequest(this.url + URL.countriesList, params).subscribe(x => {
      console.log('@@@', x);
    });
  };

  onSubmit(event,form: FormGroup, type) {
    event.target.disabled = true;
    this.loader.present();
    this.sendInvite(form.value, type);
  }

  sendInvite(value: any, type) {
    let params = {
      "auth": {
        "type": "token",
        "token": this.token,
        "orgId": this.org
      },
      name: value.name,
      emailId: value.email,
      contactNumber: value.contact,
      city: value.city,
      countryCode: value.country_code
    };
    if (type == 'sms') {
      params['type'] = type;
    }
    if (type == 'email') {
      params['type'] = type;
    }
    console.log(this.url + UNITURL.sendInvite);
    console.log(params);
    this._api.postRequest(this.url + UNITURL.sendInvite, params).subscribe(
      async (response) => {
        this.loader.dismiss();
        if (response.success == true) {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: response.message ? response.message : '',
            buttons: [
              {
                text: 'Dismiss',
                role: 'Dismiss',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.back();
                }
              }
            ]
          });
          await alert.present();
          this.referralForm.reset();
        } else {
          const alert = await this.alertCtrl.create({
            header: "Error",
            message: response.message ? response.message : '',
            buttons: [
              {
                text: 'Dismiss',
                role: 'Dismiss',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.back();
                }
              }
            ]
          });
          await alert.present();
        }
      }, (error) => {
        this.loader.dismiss();
      });
  }

  back() {
    this.router.navigate(["tabs/profile"]);
  };


}




