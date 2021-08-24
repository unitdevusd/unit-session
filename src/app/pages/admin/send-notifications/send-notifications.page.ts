import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.page.html',
  styleUrls: ['./send-notifications.page.scss'],
})
export class SendNotificationsPage implements OnInit {

  public notificationForm: FormGroup;
  url: any = config.url;
  token: any;
  orgId: any;
  
  constructor(
    public formBuilder: FormBuilder,
    public loader: LoaderService,
    public api: ApiService,
    public _toast: ToastService,
    public storage : Storage
    ) { 
    this.notificationForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
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
          }
        });
      }
    });
  }

  send(){
    this.loader.present();
    if (this.token) {
        const params = {
          orgId : this.orgId,
          token: this.token,
          title: this.notificationForm.value.title,
          bodyOfNotification: this.notificationForm.value.body
        }
        console.log(params);
        this.api.postRequest(this.url + UNITURL.adminNotfication,
          params).subscribe(
            async (result) => {
              this.loader.dismiss();
              this._toast.presentToast(result.message);

              if (result.success) {
                this.notificationForm.reset();
              } else {
              }
            }
          ), (error) => {
            this.loader.dismiss();
            console.log('error', error)
          }
      }
  }
}
