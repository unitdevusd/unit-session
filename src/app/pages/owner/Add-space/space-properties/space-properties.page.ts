import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { config, KEY, UNITURL } from 'src/app/pages/config/config';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-space-properties',
  templateUrl: './space-properties.page.html',
  styleUrls: ['./space-properties.page.scss'],
})
export class SpacePropertiesPage implements OnInit {

  url: any = config.url;
  spaceType: any[];
  storageType: any[];
  timeSlotType: any[];
  acccessType: any[];
  features: any = [];
  selectedAmenities: any = [];
  selectedAccessType: any;
  selectedtimeSlotType: any;
  selectedStorageType: any;
  selectedspaceType: any;
  slideIndex: number;
  spaceDetails: any;
  spaceId: string;
  priviousPage: any;

  dailyPrice: any;
  dailyPriceRange: string;
  weeklyPriceRange: string;
  monthlyPriceRange: string;
  weeklyPrice: any;
  monthlyPrice: any;
  item: any;
  selectedDiscount: any = 25;

  discount = [
    { name: '0%', value: '0' },
    { name: '25%', value: '25' },
    { name: '50%', value: '50' },
    { name: '75%', value: '75' }
  ];
  token: any;
  orgId: any;


  constructor(
    public router: Router,
    public _api: ApiService,
    public route: ActivatedRoute,
    public toast: ToastService,
    public _loader: LoaderService,
    public _gs: GlobalService,
    public alrtCtrl: AlertController,
    public storage: Storage,
    public _zone : NgZone
  ) { }

  ngOnInit() {
    this.getUserData();
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.spaceDetails) {
          this.spaceDetails = JSON.parse(params.spaceDetails);
          console.log(this.spaceDetails);
          this.priviousPage = params.priviousPage;
          setTimeout(() => {
            this.addSpaceInfo(this.spaceDetails);
          }, 500);
        }
      }
    });
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) => {
          if (org) {
            this._zone.run(()=>{
              this.token = session;
            this.orgId = org;
            this.placeMeta();
            })
          }
        });
      }
    });
  }

  placeMeta() {
    this._loader.present('');
    if (this.token) {
      const params = {
        apiKey: KEY.apikey
      };
      this._api.postRequest(this.url + UNITURL.placeMeta, params).subscribe(
        async (result) => {
          this._loader.dismiss();
          if (result.success) {
            console.log('placemeta');
            this.acccessType = result.data.list.accessType;
            this.features = result.data.list.amenities;
            this.spaceType = result.data.list.spaceType;
            this.storageType = result.data.list.itemType;
            this.timeSlotType = result.data.list.timeAccessType;
            console.log(this.spaceType);
          } else {
            this.toast.presentToast(result.message);
          }
        }
      )
    }
  }

  saveListing() {
    if (this.selectedAccessType || this.selectedAccessType || this.selectedtimeSlotType || this.selectedStorageType
      || this.dailyPrice || this.weeklyPrice || this.monthlyPrice
    ) {
      this.addSpace(2);
    } else {
      this.addSpace(1);
    }
  }

  backPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(this.spaceDetails),
        priviousPage: 'tab4'
      }
    };
    this.router.navigate(['space-details'], navigationExtras);
  }

  accessTypeSelected() { }

  timeSlotSelected() { }

  storageSelected() { }

  spaceSelected() { }

  async backAlert() {
    const alert = await this.alrtCtrl.create({
      header: 'Lose your data',
      message: 'You may loose your data. Are you sure that you want to start all over again?',
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
      this.router.navigate(['tabs/my-spaces']);
    } else {
      this.router.navigate(['add-address']);
    }
  }

  addSpaceInfo(spaceDetails: any) {
    console.log('In add spaceInfo', spaceDetails);
    this.spaceId = spaceDetails._id;
    this.selectedAccessType = spaceDetails.timeAccessStatus;
    this.selectedtimeSlotType = spaceDetails.accessStatus;
    this.selectedStorageType = spaceDetails.storeItems;
    this.selectedspaceType = spaceDetails.spaceType;
    console.log(this.selectedspaceType);
    console.log(spaceDetails.pricing);
    if (spaceDetails.pricing) {
      this.dailyPrice = spaceDetails.pricing.daily;
      this.monthlyPrice = spaceDetails.pricing.monthly;
      this.weeklyPrice = spaceDetails.pricing.weekly;
    }
    console.log(this.spaceType);
    this.selectedDiscount = spaceDetails.discountPercentage;
    if (this.selectedspaceType.length) {
      this.item = this.spaceType.filter(x => x._id == this.selectedspaceType);
      if (this.item.length) {
        this.dailyPriceRange = `Recommended from  $ ${this.item[0].prices.daily.min} to $ ${this.item[0].prices.daily.max}`;
        this.weeklyPriceRange = `Recommended from  $ ${this.item[0].prices.weekly.min} to $ ${this.item[0].prices.weekly.max}`;
        this.monthlyPriceRange = `Recommended from   $ ${this.item[0].prices.monthly.min} to $ ${this.item[0].prices.monthly.max}`;
      }
    }

  }

  next(index) {
    console.log(index);
    this.slideIndex = index;
    this.navigate(index);
  }
  navigate(index) {
    const params = {
      token: this.token,
      orgId: this.orgId,
      name: this.spaceDetails.name,
      address: this.spaceDetails.address,
      loc: this.spaceDetails.loc,
      description: this.spaceDetails.description,
      size: this.spaceDetails.size,
      spaceType: this.selectedspaceType,
      storeItems: this.selectedStorageType,
      accessStatus: this.selectedtimeSlotType,
      timeAccessStatus: this.selectedAccessType,
      discountFirstMonth: true,
      discountPercentage: this.selectedDiscount,
      index: index,
      images: this.spaceDetails.images,
      videos: this.spaceDetails.videos,
      amenities: this.spaceDetails.amenities,
      pricing: {
        daily: parseInt(this.dailyPrice),
        weekly: parseInt(this.weeklyPrice),
        monthly: parseInt(this.monthlyPrice)
      }
    }
    console.log('In space-prop', this.spaceId);
    if (this.spaceId) {
      params['_id'] = this.spaceId;
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(params),
        priviousPage: 'tabs/my-spaces'
      }
    };
    this.router.navigate(['space-description'], navigationExtras);

  }



  addSpace(index) {
    console.log(index);
    if (this.token) {
      const params = {
        token: this.token,
        orgId: this.orgId,
        name: this.spaceDetails.name,
        address: this.spaceDetails.address,
        loc: this.spaceDetails.loc,
        description: this.spaceDetails.description,
        size: this.spaceDetails.size,
        spaceType: this.selectedspaceType,
        storeItems: this.selectedStorageType,
        accessStatus: this.selectedtimeSlotType,
        timeAccessStatus: this.selectedAccessType,
        discountFirstMonth: this.spaceDetails.discountFirstMonth,
        discountPercentage: this.selectedDiscount,
        index: index,
        images: this.spaceDetails.images,
        videos: this.spaceDetails.videos,
        amenities: this.spaceDetails.amenities,
        pricing: {
          daily: parseInt(this.dailyPrice),
          weekly: parseInt(this.weeklyPrice),
          monthly: parseInt(this.monthlyPrice)
        }
      }
      console.log(params);

      this.addPlaceApi(params);
    }
  }
  addPlaceApi(place) {
    if (this.spaceId) {
      place['placeId'] = this.spaceId;
      this.updateSpace(place);
    } else {
      this.addNewPlace(place);
    }
  }


  updateSpace(place: any) {
    this._loader.present('Adding Space. Please wait..');
    this._api.postRequest(this.url + UNITURL.updateSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this._loader.dismiss();
          this.router.navigate(['tabs/my-spaces']);
        }
      ), (error) => {
        this._loader.dismiss();
        this.toast.presentToast(error.description);
      }

  }
  addNewPlace(place: any) {
    this._api.postRequest(this.url + UNITURL.addSpace,
      place).subscribe(
        async (result) => {
          if (result.success) {
            this.toast.presentToast(result.message);
          }
          this._gs.sendRefershScreen("refresh");
          this._loader.dismiss();
          this.router.navigate(['tabs/my-spaces']);
        }
      ), (error) => {
        this._loader.dismiss();
        this.toast.presentToast(error.description);
      }
  }
  discountSelected() {
    console.log(this.selectedDiscount);
  }

}
