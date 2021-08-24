import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Plugins,Browser } from '@capacitor/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

const { Device } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  logged: boolean = false;
  public settingPages = [
    {
      title: 'Password',
      url: '/change-password',
      icon: '../../assets/imgs/feather-lock.png'
    },
    
    // {
    //   title: 'Email/Notifications',
    //   url: '',
    //   icon: '../../../../assets/imgs/material-email.png'
    // }
  ];
  email: any;
  name: any;
  lastName: any;
  profileImage: any;
  permissionlist: any;
  version : any;
  permission = {
    canCreateSpace : false,
    earningcanRetrive : false,
    paymentCanpay : false,
    canviewAdditionalInfo : false,
    canSendInvite : false
  };

  constructor(
    public storage: Storage,
    public _gs: GlobalService,
    public alertCtrl : AlertController,
    public router : Router,
    public _toast : ToastService,
    public socialSharing: SocialSharing,
    public appVersion: AppVersion,
    public navController: NavController
  ) {
    this.appVersion.getVersionCode().then(res => {
      this.version = res;
    }).catch(error => {
      console.log(error);
    });
    this._gs.getData().subscribe(x => {
      if (x != undefined) {
        let user = x;
        this.getUserData(user);
      }
    });

    this._gs.getUpdatedTabs().subscribe(status => {
      if(status){
        console.log(status.permissions);
        this.permissionlist = status.permissions;
        this.setPermissions();
        }
      });
     
      this._gs.getLogOut().subscribe(status =>{
        this.logged = false;
      });

  }
  setPermissions() {
    console.log(this.permissionlist);
    this.permission.canCreateSpace = this.permissionlist.includes("unit.space.canCreate");
    this.permission.paymentCanpay  =  this.permissionlist.includes("unit.booking.payment.canPay");
    this.permission.earningcanRetrive = this.permissionlist.includes("unit.myearnings.canRetrive");
    this.permission.canviewAdditionalInfo = this.permissionlist.includes("unit.user.canViewInfo");
    this.permission.canSendInvite =  this.permissionlist.includes("unit.invite.canSendEmail" || "unit.invite.canSendSMS");
  }
  getUserData(user?: any) {
    if (user) {
      this.updateUser(user);
    } else {
      console.log('In');
      this.storage.get('user').then((user) => {
        if (user) {
          this.updateUser(user);
        }
      });
      this.storage.get('permissions').then((permissions) => {
        if (permissions) {
          this.permissionlist = permissions;
          this.setPermissions();
        }
      });
    }
  }

  updateUser(user: any) {
    this.logged = true;
    this.email = user.email;
    this.name = user.firstName;
    this.lastName = user.lastName;
    if (user.profilePic) {
      this.profileImage = user.profilePic;
    } else {
      this.profileImage = "";
    }
  }

  ngOnInit() {
    this.getUserData();
  }

  async logout() {
    const alert = await this.alertCtrl.create({
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
    setTimeout(() => {
      this.storage.clear().then(() => {
        console.log('all keys cleared');
      });
      this.logged = false;
      this._gs.logOut();
      this._gs.sendData(false);
      this.navController.navigateRoot(['tabs/tab1']);
    }, 200);
  }

  logIn() {
    let navigationExtras: NavigationExtras = {
      queryParams : {
        from: 'tabs/profile'
      }
    }
    this.router.navigate(['login'], navigationExtras);
  }


  async invite(){
    console.log('Invite send');
    this.router.navigate(['invite']);
  }

  consultLawyer(){
    console.log('consult');
    this._toast.presentToast('Legal Team will contact you soon!');
  }

  navigateHost() {

    let navigationExtras: NavigationExtras = {
      queryParams : {
        priviousPage: 'tabs/profile'
      }
    }
    this.router.navigate(['add-address'],navigationExtras);
  }

  becomeHost(){
    console.log('become Host');
  }
  becomeTenant(){
    console.log('become Tenant');
  }

  async terms() {
    await Browser.open({ url: 'https://unitpublicstorage.com/privacy-policy.html' });
  }
  async privacy() {
    await Browser.open({ url: 'https://unitpublicstorage.com/privacy-policy.html' });
  }
}
