import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { config, KEY, UNITURL } from 'src/app/pages/config/config';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Storage } from '@ionic/storage';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-space-details',
  templateUrl: './space-details.page.html',
  styleUrls: ['./space-details.page.scss'],
})
export class SpaceDetailsPage implements OnInit {

  addPlace: FormGroup;
  lat: any;
  long: any;
  location: any;
  priviousPage: any = '';
  spaceId: any;
  slideIndex: number;
  url: any = config.url;
  spaceDetails: any = '';
  spaceType: any = [];
  selectedspaceType : any;
  token: any;
  orgId: any;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private route: ActivatedRoute,
    public alrtCtrl: AlertController,
    private _loader: LoaderService,
    private storage : Storage,
    private _toast : ToastService,
    private _zone:NgZone
  ) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.location) {
          this.addAddress(params);
        }
        if (params.spaceDetails) {
          this.spaceDetails = JSON.parse(params.spaceDetails);
          this.priviousPage = params.priviousPage;
        }
      }
    });
    this.initForm();
  }

  ngOnInit(){
    this.getUserData();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) => {
          if (org) {
            this._zone.run(() => {
              this.token = session;
              this.orgId = org;
              this.placeMeta();
            });
          }
        });
      }
    });
  }
  
  initForm() {
    this.addPlace = this._fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      address: ['',Validators.required],
      lenght: ['',Validators.required],
      breadth: ['',Validators.required],
      height: ['',Validators.required]

    }); 
}

addAddress(params: any) {
  let address = JSON.parse(params.location);
  this.lat = Number(address[0].latitude);
  this.long = Number(address[0].longitude);
  this.location = params.address;
  if(this.location === 'Address Not Available!'){
    this.location = '';
  }
  this.addPlace.controls['address'].setValue(this.location);
}

addSpaceInfo(spaceDetails: any) {
 this._zone.run(()=>{
  console.log('inspaced',spaceDetails);
  this.selectedspaceType = spaceDetails.spaceType;
  this.spaceId = spaceDetails._id;
  this.lat = spaceDetails.loc.coordinates[1];
  this.long = spaceDetails.loc.coordinates[0];
  this.location = spaceDetails.address;
  if(this.location === 'Address Not Available!'){
   this.location = '';
 }
  this.addPlace.controls['address'].setValue(this.location);
  this.addPlace.controls['name'].setValue(spaceDetails.name);
  this.addPlace.controls['description'].setValue(spaceDetails.description);
  this.addPlace.controls['lenght'].setValue(spaceDetails.size.lenght);
  this.addPlace.controls['breadth'].setValue(spaceDetails.size.breadth);
  this.addPlace.controls['height'].setValue(spaceDetails.size.height);
 })
}

next(index){
  this.slideIndex = index;
  this.addSpace();
}
  addSpace() {
    console.log('spaceDe', this.spaceDetails);
    console.log(this.selectedspaceType);
    const params = {
      token: this.token,
      orgId : this.orgId,
      name: this.addPlace.value.name,
      address: this.addPlace.value.address,
      loc: {
        type: "Point",
        coordinates: [
          this.long,
          this.lat
        ]
      },
      description: this.addPlace.value.description,
      size: {
        lenght: this.addPlace.value.lenght,
        breadth: this.addPlace.value.breadth,
        height: this.addPlace.value.height
      },
      spaceType: this.selectedspaceType,
      storeItems: this.spaceDetails.storeItems ? this.spaceDetails.storeItems : '',
      accessStatus: this.spaceDetails.accessStatus ? this.spaceDetails.accessStatus : '',
      timeAccessStatus: this.spaceDetails.timeAccessStatus ? this.spaceDetails.timeAccessStatus : '',
      discountFirstMonth: this.spaceDetails.discountFirstMonth,
      discountPercentage: this.spaceDetails.discountPercentage,
      index: this.slideIndex,
      images: this.spaceDetails.images,
      videos: this.spaceDetails.videos,
      amenities: this.spaceDetails.amenities,
      pricing: this.spaceDetails.pricing,
      additionalInfo : this.spaceDetails.additionalInfo
    }




    if (this.spaceId) {
      params['_id'] = this.spaceId;
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        spaceDetails: JSON.stringify(params),
        priviousPage: 'tab4'
      }
    };
    this.router.navigate(['space-properties'], navigationExtras);
  }

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
    
    
  placeMeta() {
    this._loader.present('');
        const params = {
          apiKey : KEY.apikey
         };
        this._apiService.postRequest(this.url + UNITURL.placeMeta, params).subscribe(
          async (result) => {
            this._loader.dismiss();
            if (result.success) {
              this.spaceType = result.data.list.spaceType;
              this.addSpaceInfo(this.spaceDetails);
            } else {
              this._toast.presentToast(result.message);
            }
          }
        )
      }
}
