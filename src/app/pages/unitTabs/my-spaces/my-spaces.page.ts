import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { config, UNITURL } from '../../config/config';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-my-spaces',
  templateUrl: './my-spaces.page.html',
  styleUrls: ['./my-spaces.page.scss'],
})
export class MySpacesPage implements OnInit {

  private url: any = config.url;
  private placesList: any = [];
  private token: any;
  userName: string = '';
  lastName: any;
  orgId: any;
  additionalInfo: boolean = false;
  
  constructor(
    private _apiService: ApiService,
    private router: Router,
    public alrtCtrl: AlertController,
    private _gs: GlobalService,
    private socialSharing: SocialSharing,
    private _loader: LoaderService,
    private storage : Storage,
    private _toast : ToastService
  ) { 
    this._gs.getUpdatedTabs().subscribe(status =>{
      if(status){
        this.token = status.token;
        this.orgId = status.orgId;
        this.getAdditionalInfo();
        this.getSpaces();
      }
    });

    this._gs.getRefreshScreen().subscribe(x => {
      if (x) {
        this.getAdditionalInfo();
        this.getSpaces();
      }
    });
  }
  getAdditionalInfo() {
    const params = {
      token: this.token,
      orgId : this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.getUserInformation,
      params).subscribe(
        async (result) => {
          if (result.success) {
              if(result.data.length == 0){
                this.additionalInfo = false;
              }else{
                this.additionalInfo =  true;
              }
          }else{
            console.log(result);
          }
        }
      ), (error) => {
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
  }
  
  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("user").then((user) =>{
          console.log('user', user);
          this.userName = user.firstName;
          this.lastName = user.lastName;
        });
        this.storage.get("org").then((org) =>{
          if(org){
            this.token = session;
            this.orgId = org;
            this.storage.get("permissions").then((permissions) => {
              let havepermission = permissions.includes("unit.space.canRetriveOwn");
              if(havepermission){
                this.getSpaces();
              this.getAdditionalInfo();
              }
              
          });
            
          }
        });
      }
    });
  }

  getSpaces() {
    this._loader.present('Loading Spaces, please wait ...');
    const params = {
      token: this.token,
      orgId : this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.myPlaces,
          params).subscribe(
            async (result) => {
              this._loader.dismiss();
              if (result.success) {
                result.data.list.map(x =>{
                  if(x.index != x.spaceListingSteps){
                    x['progressPercentage'] = Math.floor(x.index / x.spaceListingSteps * 100); 
                  }
                });
                this.placesList = result.data.list;
              }else{
                console.log(result);
              }
            }
          ), (error) => {
            this._loader.dismiss();
            console.log(error.description);
            this._toast.presentToast(error.description);
          }
    }


    addSpace(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          priviousPage: 'tabs/my-spaces'
        }
      };
      this.router.navigate(['add-address'],navigationExtras);
    }


    inProgress(space) {
      console.log(space.index);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          spaceDetails: JSON.stringify(space),
          priviousPage: 'tabs/my-spaces'
        }
      };
      console.log(space.index);
      if (space.index == 1) {
        this.router.navigate(['space-properties'], navigationExtras);
      }
      if (space.index == 2) {
        this.router.navigate(['space-description'], navigationExtras);
      }
      if (space.index == 3) {
        this.router.navigate(['space-features'], navigationExtras);
      }
      if(space.index == 4){
        this.router.navigate(['space-publish'], navigationExtras);
      }
    }

    async publish(space, flag){
      if(!this.additionalInfo){
        let message = `Please complete your profile to publish your listing.`;
        const alert = await this.alrtCtrl.create({
          header: 'Profile',
          message:  message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => { }
            }, {
              text: 'ok',
              handler: () => {
               this.addDetails();
              }
            }
          ]
        });
        await alert.present();
      }else{
        this.PublishAlert(space, flag);
      }
    }
  addDetails() {
    let navigationExtras: NavigationExtras = {
          queryParams: {
            priviousPage: 'tabs/my-spaces'
          }
        };
    this.router.navigate(['checkr'], navigationExtras);
  }


    async PublishAlert(place,flag) {
      let message = '';
      let header = '';
      if(flag == true){
        header = 'Publish';
        message ='Do you want to publish' +' '+ place.name +' '+ '?'
      }else{
        header = 'Unpublish';
        message ='Do you want to unpublish'  +' '+ place.name +' '+ '?'
      }
      console.log(place);
      const alert = await this.alrtCtrl.create({
        header: header,
        message:  message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => { }
          }, {
            text: 'ok',
            handler: () => {
              this.spacePublish(place,flag);
            }
          }
        ]
      });
  
      await alert.present();
    }
  
    spacePublish(space, flag){
      console.log(space);
       if(this.token){
        const params = {
          token: this.token,
          placeId: space._id,
          publish:  flag,
          orgId : this.orgId
        }
        this._apiService.postRequest(this.url + UNITURL.publishSpace,
        params).subscribe(
          async (result) => {
            console.log(result);
            if (result.success) {
              this._toast.presentToast(result.message);
              this.getSpaces();
            }
          }
        ), (error) => {
          console.log(error.description);
          this._toast.presentToast(error.description);
        }
       }
    }

    shareByFacebook(place){
    console.log('place', place);
    this.socialSharing.shareViaFacebook(null,null,'https://apps.apple.com/in/app/myrivu/id1250322239').then((res) => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }


  editSpace(place) {
    let id = place._id;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: id
      }
    };
    this.router.navigate(['edit-space'], navigationExtras);
  }


  async deleteSpaceAlert(place) {
    const alert = await this.alrtCtrl.create({
      header: 'Delete',
      message: 'Do you want to delete ' + place.name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteSpace(place._id);
          }
        }
      ]
    });
    await alert.present();
  }


  deleteSpace(id) {
    const params = {
      token: this.token,
      placeId: id,
      orgId: this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.removePlace,
      params).subscribe(
        async (result) => {
          console.log(result);
          if (result.success) {
            this._toast.presentToast(result.message);
            this.getSpaces();
          }
        }
      ), (error) => {
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
  }

}
