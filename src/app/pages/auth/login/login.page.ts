import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { config, UNITURL, URL} from '../../config/config';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {
  Plugins
} from '@capacitor/core';

const { Device } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public url: any = config.url;
  public  loginUrl = URL.signIn;
  priviousUrl: any;
  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl : AlertController,
    public _apiService: ApiService,
    public storage: Storage,
    public router: Router,
    public _gs : GlobalService,
    public route: ActivatedRoute
    ) {

      this.route.queryParams.subscribe((params) => {
        if (params && params.from) {
          this.priviousUrl = params.from;
          console.log( this.priviousUrl );
        }
      });

    this.loginForm = this.formBuilder.group({
      emailId: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl("", Validators.required),
    });
   }

 
  ngOnInit() {}

  async presentAlert(options) {
    const alert = await this.alertCtrl.create({
      header: options.header ? options.header : 'Alert',
      message: options.message ? options.message : '',
      buttons: options.buttons
    });
    await alert.present();
  }

  login() {
    this.getLoginResponse();
  }
  getLoginResponse() {
    console.log(this.url + this.loginUrl);
    if(this.loginForm.value){
      this.loginForm.value.permissions = true;
    }
    this._apiService
      .postRequest(this.url + this.loginUrl, this.loginForm.value)
      .subscribe(async (res) => {
        if (res.success) {
          this.settings(res.data);
          this.navigate();
          this.loginForm.reset();
        } else {
          this.presentAlert({ header: "Error", message: res.message, buttons: ["Dismiss"] });
        }
      }, (err) => {
        this.presentAlert({ header: "Error", message: "Unable to process your request. Please try again later", buttons: ["Dismiss"] });
      });
  }
  navigate() {
      if(this.priviousUrl == 'place-detail'){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            from: "place-detail"
          },
        };
        this.router.navigate([this.priviousUrl], navigationExtras);
      }else{
        this.router.navigate([this.priviousUrl]);
      }
      if(!this.priviousUrl){
        this.router.navigate(["tabs/tab1"]);
      }
  }
  
  settings(data: any) {
    let org = data.orgs.filter(x => x.name == "Unit" || x.name == 'unit');
    if(org.length){
      this.storage.set("permissions", org[0].permissions);
    }
    this.storage.set("session", data.token);
    this.storage.set("user", data.user.profile);
    this.storage.set("loggedUserId",data.user._id);
    this._gs.updateTabs({
      orgId : org[0].id,
      token: data.token,
      permissions : org[0].permissions
    });
    this._gs.sendData(data.user.profile);
    this.storage.set("org", org[0].id);
    
    this.attachFCM(data.token);
  }
  async attachFCM(token) {
    const info = await Device.getInfo();
    this.storage.get('fcm_token').then((fcmToken) => {
      if(fcmToken){
        const params = {
          deviceId : info.uuid,
          token : token,
          deviceType: info.operatingSystem,
          enableNotifications : true,
          firebaseToken : fcmToken
        };
        this._apiService.postRequest(this.url + UNITURL.addToken,params).subscribe(
          async (result) => {
            console.log(result);
          }, (error) => {
            console.log('error', error)
          }
        )
      }
    });
  }
}
