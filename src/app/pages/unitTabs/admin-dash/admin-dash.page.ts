import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.page.html',
  styleUrls: ['./admin-dash.page.scss'],
})
export class AdminDashPage implements OnInit {

  public url: any = config.url;
  count: any;
  token: any;
  orgId: any;
  constructor(
    public _api: ApiService,
    public storage : Storage,
  ) { }

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
            this.getcount();
          }
        });
      }
    });
  }

  getcount() {
    if (this.token) {
        if (this.token) {
          const params = {
            token: this.token,
            orgId : this.orgId
          }
          this._api.postRequest(this.url + UNITURL.getCountForAdmin, params).subscribe(
            async (result) => {
              if (result.success) {
                console.log('@@@',result);
                this.count = result.data.tabsCount;
                console.log(this.count);
              }
            }
          ), (error) => {
            console.log(error.description);
          }
        }
    }
  }
  
  doRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
    this.getcount();
    event.target.complete();
    },1000);
  }
  ionPull(event: any) { }
  ionStart(event: any) { }
}
