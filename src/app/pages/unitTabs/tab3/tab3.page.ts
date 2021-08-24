import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { config,UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public url: any = config.url;
  notificationList: any = [];
  loading: boolean;
  logged: boolean = false;
  token: any;
  orgId: any;
  text : string = `No notifications.`;
  constructor( 
    public router: Router,
    public _apiService: ApiService,
    public _gs: GlobalService,
    public storage : Storage,
    public _toast : ToastService
  ){
    this._gs.getUpdatedTabs().subscribe(status => {
      if(status){
        this.token = status.token;
        this.orgId = status.orgId;
        this.logged = true;
        this.notifications();
      }
    });
     // logout status
     this._gs.getLogOut().subscribe(status =>{
      if(status){
        this.logged = false;
      }
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
            this.logged = true;
            this.notifications();
          }
        });
      }
    });
  }
  
  logIn() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: 'tabs/tab3'
      }
    }
    this.router.navigate(['login'], navigationExtras);
  }

  doRefresh(ev) {
    this.notifications();
    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 1000);
  }
  
  notifications() {
    this.loading = true;
    const params = {
      token: this.token,
      orgId: this.orgId
    };
    this._apiService.postRequest(this.url + UNITURL.allNotifications, params).subscribe(
      async (result) => {
        if (result.success) {
          if(result.data.length){
            this.notificationList = result.data.reverse();
          }
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        } else {
          this.loading = false;
          this._toast.presentToast(result.message);
        }
      }
    ), (error) => {
      console.log(error.description);
      this.loading = false;
      this._toast.presentToast(error.description);
    }
  }
  
  markasRead(noti, index) {
    this.markasReaded(noti._id, index);
  }

  markasReaded(_id: any, index: any) {
    const params = {
      token: this.token,
      notificationId: _id
    }
    console.log(params);
    this._apiService.postRequest(this.url + '', params).subscribe(result => {
      console.log('@@', result);
    }, (error) => {
      console.log(error.description);
      this._toast.presentToast(error.description);
    })
  }

  archive() {
    console.log('archive');
  }

  onNotiClick(noti, index) {
    console.log(noti);

    setTimeout(() => {
      // noti -->  Place booking
      if (noti.type == "booking") {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            type: "Tenant",
            from : "tabs/tab3"
          }
        };
        this.router.navigate(['booking-detail', noti.meta.bookingDetails._id], navigationExtras);
      }
      if (noti.type == "extend") {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            notification: JSON.stringify(noti)
          }
        };
        this.router.navigate(['select-type'], navigationExtras);
      }
      if (noti.type == 'RequestExtension') {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            notification: JSON.stringify(noti)
          }
        };
        this.router.navigate(['request-for-extension'], navigationExtras);
      }
      // if (noti.type == "Payment") {
      //   let navigationExtras: NavigationExtras = {
      //     queryParams: {
      //       notification: JSON.stringify(noti)
      //     }
      //   };
      //   this.router.navigate(['payment-for-extension'], navigationExtras);
      // }
    }, 100);
  }
  
}
  

