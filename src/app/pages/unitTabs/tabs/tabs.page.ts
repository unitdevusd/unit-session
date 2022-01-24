import { Component, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Storage } from '@ionic/storage';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('app_tabs') tabRef: IonTabs;
  
  logged: boolean;
    permissions = {
      canCreateSpace : false,
      canRetriveOwnBookings : false,
      canRetriveSpaceBookings : false,
      notificationcanRetrive : false,
      spaceCanRetriveAll : false
    };
    permissionlist: any;
  deviceInfo: any;

  constructor(
    private _gs: GlobalService,
    private storage : Storage
  ) {

    this._gs.getUpdatedTabs().subscribe(status => {
      this.getUserData();
    });
     // set on bais of notifications
     this._gs.getfcmData().subscribe(status =>{
      if(status){
        this.tabRef.select('tab3');
      }
    });

    // logout status
    this._gs.getLogOut().subscribe(status =>{
      if(status){
        this.permissions = {
          canCreateSpace : false,
          canRetriveOwnBookings : false,
          canRetriveSpaceBookings : false,
          notificationcanRetrive : false,
          spaceCanRetriveAll : false
        };
        this.logged = false;
        this.tabRef.select('tab1');
      }
    });
  }

  ionViewWillEnter() {
    this.getUserData();
  }
  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("permissions").then((permissions) => {
            this.permissionlist = permissions;
            this.setPermissions();
        });
      }
    });
  }
  setPermissions(){
    if(this.permissionlist){
      this.permissions.canRetriveOwnBookings = this.permissionlist.includes("unit.booking.canRetriveOwnBookings");
      this.permissions.canCreateSpace = this.permissionlist.includes("unit.space.canCreate");
      this.permissions.canRetriveSpaceBookings = this.permissionlist.includes("unit.booking.canRetriveSpaceBookings");
      this.permissions.notificationcanRetrive = this.permissionlist.includes("unit.notification.canRetrive");
      this.permissions.spaceCanRetriveAll = this.permissionlist.includes("unit.space.canRetriveAll");
      if(this.permissions.canCreateSpace){
          this.tabRef.select('my-spaces');
        }
      if(this.permissions.spaceCanRetriveAll ){
        this.tabRef.select('admin-dash');
      }
    }
    
  }

}
