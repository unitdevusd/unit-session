import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { config, UNITURL } from 'src/app/pages/config/config';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-space-publish',
  templateUrl: './space-publish.page.html',
  styleUrls: ['./space-publish.page.scss'],
})
export class SpacePublishPage implements OnInit {

  spaceDetails: any;
  spaceId: any;
  url: any = config.url;
  token: any;
  orgId: any;

  constructor(
    public router: Router,
    public _api: ApiService,
    public route: ActivatedRoute,
    public toast: ToastService,
    public loader: LoaderService,
    public _gs: GlobalService,
    public alrtCtrl: AlertController,
    public storage: Storage
  ) {

    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.spaceDetails) {
          this.spaceDetails = JSON.parse(params.spaceDetails);
          console.log(this.spaceDetails);
          this.spaceDetails.index = 5;
          if (this.spaceDetails._id) {
            this.spaceId = this.spaceDetails._id;
          }

        }
      }
    });
  }

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
          }
        });
      }
    });
  }


  publish(publish) {
    this.addSpace(publish);
  }


  addSpace(publish) {
    console.log(this.spaceDetails);
    if (this.token) {
      let params = this.spaceDetails;
      params['token'] = this.token;
      this.addPlaceApi(params, publish);
    }

  }
  addPlaceApi(place, publish) {
    place['publish'] = publish;
    console.log(place);
    console.log(this.spaceId);
    // return;
    if (this.spaceId) {
      place['placeId'] = this.spaceId;
      this.updateSpace(place);
    } else {
      this.addNewPlace(place);
    }

  }

  updateSpace(place: any) {
    place['orgId'] = this.orgId;
    this.loader.present('Updating Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.updateSpace,
      place).subscribe(
        async (result) => {
          console.log(result);
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this.loader.dismiss();
          this.router.navigate(['tabs/my-spaces']);
        }
      ), (error) => {
        this.loader.dismiss();
        this.toast.presentToast(error.description);
      }

  }
  addNewPlace(place: any) {
    this.loader.present('Adding Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.addSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this.loader.dismiss();
          this.router.navigate(['tabs/my-spaces']);
        }
      ), (error) => {
        this.loader.dismiss();
        this.toast.presentToast(error.description);
      }
  }

  back(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(this.spaceDetails)
      }
    };

    this.router.navigate(['space-features'], navigationExtras);
  }

}
