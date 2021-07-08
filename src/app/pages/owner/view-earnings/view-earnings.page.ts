import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-view-earnings',
  templateUrl: './view-earnings.page.html',
  styleUrls: ['./view-earnings.page.scss'],
})
export class ViewEarningsPage implements OnInit {

  url: any = config.url;
  resp: any;
  total: any = 0;
  token: any;
  orgId: any;

  constructor(
    private _apiService: ApiService,
    private alert: ToastService,
    private storage : Storage
    ) {}

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
            this.viewEarnings();
          }
        });
      }
    });
  }

  ionViewWillEnter() {}

  viewEarnings() {
    if (this.token) {
        const params = {
          token: this.token,
          orgId : this.orgId
        }
        console.log(params);
        this._apiService.postRequest(this.url + UNITURL.placeWithTotalEarnings,
          params).subscribe(
            async (result) => {
              if (result.success) {
                this.resp = result.data.list;
                for (var i = 0; i < this.resp.length; i++) {
                  if (this.resp[i].totalEarings) {
                    this.total += Number(this.resp[i].totalEarings);
                  }
                }
              }
            }
          ), (error) => {
            console.log(error.description);
            this.alert.presentToast(error.description);
          }
    }
  }
}
