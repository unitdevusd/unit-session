import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-request-for-extension',
  templateUrl: './request-for-extension.page.html',
  styleUrls: ['./request-for-extension.page.scss'],
})
export class RequestForExtensionPage implements OnInit {

  data: any;
  url: any = config.url;
  orgId: any;
  token: any;
  
  constructor(
    private router: Router,
    private _api: ApiService,
    private route: ActivatedRoute,
    private storage : Storage,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getUserData();
    this.route.queryParams.subscribe(params => {
      if (params && params.notification) {
        this.data = JSON.parse(params.notification);
        console.log(this.data);
      }
    });  
  }

  back(){
    this.router.navigate(['tabs/tab3']);
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


  notExtend(){
    // reject approval
    
    const params = {
      token : this.token,
      extendId :  this.data.meta.extensiondetails._id,
      approval : false,
      orgId : this.orgId
    };
    this.approval(params);
  }

  extend(){

    //extend Approval
    const params = {
      token : this.token,
      extendId :  this.data.meta.extensiondetails._id,
      orgId : this.orgId,
      approval : true 
    };
    this.approval(params);
  }

  
  approval(params) {
    this._api.postRequest(this.url + UNITURL.approveExtension, params).subscribe(
      (result) => {
        if(result.success){
          this.toast.presentToast(result.message);
          this.back();
        }
      }, error => {
        console.log(error);
      });
  }

}
