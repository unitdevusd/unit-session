import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private url: any = config.url;
  token: any;
  profileImage : any = "/assets/imgs/dummyUser.png";

  private adminPages = [
    {
      title: 'Edit Profile',
      url: '/edit-profile',
      icon: 'person-circle'
    },
    {
      title: 'Change Password',
      url: '/change-password',
      icon: 'lock-closed'
    },
    {
      title: 'Space Type',
      url: '/space-type',
      icon: 'business'
    },
    {
      title: 'Stored Items Type',
      url: '/stored-item-type',
      icon: 'business'
    },
    {
      title: 'Access Type',
      url: '/access-period',
      icon: 'calendar'
    },
    {
      title: 'Access Time',
      url: '/access-type',
      icon: 'alarm'
    },
    {
      title: 'Features',
      url: '/add-feature',
      icon: 'briefcase'
    },
    {
      title: 'Revenue Sharing',
      url: '/revenue-share',
      icon: 'cash'
    }

  ];
  email: any;
  name: any;
  contact: any;
  orgId: any;
  constructor(
    private _gs: GlobalService,
    private navController: NavController,
    public alertController: AlertController,
    private api: ApiService,
    private storage: Storage
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
          }
        });
        this.storage.get("user").then((user) => {
          if (user) {
            this.email = user.email;
            this.name = user.firstName;
            this.contact = user.phone;
            if (user.profilePic == null) {
              this.profileImage = "/assets/imgs/dummyUser.png";
            } else {
              this.profileImage = user.profilePic;
            }
          }
        });
      }
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'LogOut',
      message: 'Are you sure,you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Logout',
          handler: () => {
            this.clearAll();

          }
        }
      ]
    });

    await alert.present();
  }

  clearAll() {
    // this.clearDeviceToken();
    setTimeout(() => {
      this.storage.clear().then(() => {
        console.log('all keys cleared');
      });
      this._gs.logOut();
      this.navController.navigateRoot(['tabs/tab1']);
    }, 200);
  }

  clearDeviceToken() {
    const params = {
      token: this.token,
    };
    this.api.postRequest(this.url + UNITURL.removeDevice,
      params)
      .subscribe(
        async (result) => {
          if (result.success) {
            console.log('result', result);
          }
        }
      ), (error) => {
        console.log('error', error)
      }
  }

}
