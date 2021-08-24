import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  placeData: any = [];
  url: any = config.url;
  places: any = [];
  startDate: any;
  token: any;
  orgId: any;

  constructor(
    public _apiService: ApiService,
    public _loader: LoaderService,
    public router: Router,
    public _gs: GlobalService,
    public storage: Storage,
    public _toast: ToastService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) => {
          if (org) {
            this.token = session;
            this.orgId = org;
            this.getMybookedPlaces();
          }
        });
      }
    });
  }
  getMybookedPlaces() {
    this._loader.present('');
    if (this.token) {
      const params = {
        token: this.token,
        orgId: this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.bookedPlaces,
        params).subscribe(
          async (result) => {
            if (result.success) {
              this.placeData = result.data.places;
              this._loader.dismiss();
            }
          }
        ), (error) => {
          this._loader.dismiss();
          console.log(error.description);
          this._toast.presentToast(error.description);
        }
    }
  }

  viewDetails(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: "Tenant",
        from: "tabs/tab4"
      }
    };
    this.router.navigate(['booking-detail', Id], navigationExtras);
  }

}
