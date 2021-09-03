import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { config, UNITURL } from 'src/app/pages/config/config';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-space-description',
  templateUrl: './space-description.page.html',
  styleUrls: ['./space-description.page.scss'],
})
export class SpaceDescriptionPage implements OnInit {

  additionaldetails: FormGroup;
  url: any = config.url;
  priviousPage: any;
  spaceDetails: any;
  spaceId: any;
  additionalInfo : any = [];
  token: any;
  orgId: any;

  
  constructor(
    private loader: LoaderService,
    private route: ActivatedRoute,
    public alrtCtrl: AlertController,
    private router: Router,
    private _api: ApiService,
    public toast: ToastService,
    private _gs: GlobalService,
    private _fb: FormBuilder,
    private storage : Storage
    
  ) { 

    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.spaceDetails) {
          this.spaceDetails = JSON.parse(params.spaceDetails);
          console.log(this.spaceDetails);
          if (this.spaceDetails._id) {
            this.spaceId = this.spaceDetails._id;
          }
          this.priviousPage = params.priviousPage;
          this.addSpaceInfo(this.spaceDetails);
        }
      }
    });
    this.initForm();
  
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
          }
        });
      }
    });
  }

  initForm() {
    this.additionaldetails = this._fb.group({
      description: ['',Validators.required],
      healthdesc :  ['',Validators.required],
      policydesc: ['']
    }); 
  }

  addSpaceInfo(spaceDetails: any) {
    console.log(spaceDetails);
    if (spaceDetails._id) {
      this.spaceId = spaceDetails._id;
    }
    
    if (spaceDetails.additionalInfo && spaceDetails.additionalInfo.length) {
      this.additionaldetails.controls['description'].setValue(spaceDetails.additionalInfo[0].desc);
      this.additionaldetails.controls['healthdesc'].setValue(spaceDetails.additionalInfo[1].desc);
      this.additionaldetails.controls['policydesc'].setValue(spaceDetails.additionalInfo[2].desc);
    }
  }


  async backAlert() {
    const alert = await this.alrtCtrl.create({
      header: 'Lose your data',
      message: 'You may lose your data. Are you sure that you want to start all over again?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Back',
          handler: () => {
            this.back();
          }
        }
      ]
    });
    await alert.present();
  }

  back() {
    if (this.priviousPage) {
      this.router.navigate(['tabs/tab4']);
    } else {
      this.router.navigate(['add-address']);
    }
  }




  saveListing() {
    if (this.additionaldetails.value) {
      this.additionalInfo.push({'name' : 'During your stay', 'desc': this.additionaldetails.value.description});
      this.additionalInfo.push({'name' : 'health & Safety', 'desc': this.additionaldetails.value.healthdesc});
      this.additionalInfo.push({'name' : 'Cancellation Policy', 'desc': this.additionaldetails.value.policydesc});
      this.addSpace(3);
    } else {
      this.addSpace(2);
    }
  }

  addSpace(index) {
    if (this.token) {
      const params = {
        token: this.token,
        orgId : this.orgId,
        name: this.spaceDetails.name,
        address: this.spaceDetails.address,
        loc: this.spaceDetails.loc,
        description: this.spaceDetails.description,
        size: this.spaceDetails.size,
        spaceType: this.spaceDetails.spaceType,
        storeItems: this.spaceDetails.storeItems,
        accessStatus: this.spaceDetails.accessStatus,
        timeAccessStatus: this.spaceDetails.timeAccessStatus,
        index: index,
        pricing: this.spaceDetails.pricing,
        discountFirstMonth: this.spaceDetails.discountFirstMonth,
        discountPercentage: this.spaceDetails.discountPercentage,
        amenities: this.spaceDetails.amenities,
        images: this.spaceDetails.images,
        videos: this.spaceDetails.videos,
        additionalInfo: this.additionalInfo,
        spaceTypeName : this.spaceDetails.spaceTypeName
      }
      this.addPlaceApi(params);
    }
  }
  
  addPlaceApi(place) {
    console.log(this.spaceId);
    if (this.spaceId) {
      place['placeId'] = this.spaceId;
      this.updateSpace(place);
    } else {
      this.addNewPlace(place);
    }

  }


  backPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(this.spaceDetails),
        priviousPage: 'tabs/my-spaces'
      }
    };
    this.router.navigate(['space-properties'], navigationExtras);
  }
  next(index) {
    console.log(index);
    console.log(this.additionaldetails.value);
    if(this.additionaldetails.value){
      this.additionalInfo.push({'name' : 'During your stay', 'desc': this.additionaldetails.value.description});
      this.additionalInfo.push({'name' : 'health & Safety', 'desc': this.additionaldetails.value.description});
      this.additionalInfo.push({'name' : 'Cancellation Policy', 'desc': this.additionaldetails.value.description});
    }
    if (this.token) {
      const params = {
        token: this.token,
        orgId : this.orgId,
        name: this.spaceDetails.name,
        address: this.spaceDetails.address,
        loc: this.spaceDetails.loc,
        description: this.spaceDetails.description,
        size: this.spaceDetails.size,
        spaceType: this.spaceDetails.spaceType,
        storeItems: this.spaceDetails.storeItems,
        accessStatus: this.spaceDetails.accessStatus,
        timeAccessStatus: this.spaceDetails.timeAccessStatus,
        index: index,
        pricing: this.spaceDetails.pricing,
        discountFirstMonth: this.spaceDetails.discountFirstMonth,
        discountPercentage: this.spaceDetails.discountPercentage,
        amenities: this.spaceDetails.amenities,
        images:  this.spaceDetails.images,
        videos: this.spaceDetails.videos,
        additionalInfo : this.additionalInfo,
        spaceTypeName : this.spaceDetails.spaceTypeName
      }
      console.log('In space-Images', this.spaceId);
      if (this.spaceId) {
        params['_id'] = this.spaceId;
      }
      let navigationExtras: NavigationExtras = {
        queryParams: {
          spaceDetails: JSON.stringify(params),
          priviousPage: 'tabs/my-spaces'
        }
      };
      this.router.navigate(['space-features'], navigationExtras);
    }

  }

  updateSpace(place: any) {
    this.loader.present('Updating Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.updateSpace,
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






}
