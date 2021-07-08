import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { config, UNITURL,URL } from '../../config/config';
import { Storage } from '@ionic/storage';
import { getEmbedUrl } from 'src/app/utilities/mainfunction';
import { CalendarResult } from 'ion2-calendar';
import { StartBookingPage } from '../start-booking/start-booking.page';
import { GlobalService } from 'src/app/services/global.service';
import { RatingPage } from 'src/app/rating/rating.page';

declare var google;

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  @ViewChild("map", { static: false }) mapElement: ElementRef;

  private url: any = config.url;
  image: any;
  amenities: any = [];
  reviewList: any = [];
  hostImage: any;
  data: any;
  displayMap: boolean = false;
  map: any;
  latlong: any;
  dates: any = [];
  token: any;
  orgId: any;
  reviewCount: number = 0;

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl : ModalController,
    private loader: LoaderService,
    private _api: ApiService,
    private storage : Storage,
    private _gs : GlobalService
  ) { 
    

    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log(this.data);
        this.image = this.data.images;
        if (this.data.loc) {
          console.log(this.data.loc.coordinates);
          this.displayMap = true;
          let lat = this.data.loc.coordinates[1];
          let long = this.data.loc.coordinates[0];
          setTimeout(() => {
            this.loadMap(lat, long);
          }, 100);
        }
        if (this.data.videos && this.data.videos.length) {
          this.data.videos.map((x) => {
            let id = getEmbedUrl(x.url);
            x.url = `//www.youtube.com/embed/${id}`;
            return x;
          });
          this.image = this.image.concat(this.data.videos);
        }
        this.getTimings();
      }
      if(params && params.from){
        this.getTimings();
      }
    });
    this._gs.getUpdatedTabs().subscribe(status => {
      if(status){
        this.token = status.token;
        this.orgId = status.orgId;
      }
    });
  }

  ngOnDestroy() {}

  ionViewWillEnter() {}

  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.getReviews();
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) =>{
          if(org){
            this.token = session;
            this.orgId = org;
            this.getTimings();
          }
        });
      }
    });
  }

  getTimings() {
    if (this.token) {
      this.loader.present("getting TimeSlots ..");
      const params = {
        placeId: this.data._id,
        token : this.token,
        orgId : this.orgId
      }
      this._api.postRequest(this.url + UNITURL.getBookingDates, params).subscribe(
        async (result) => {
          this.loader.dismiss();
          if (result.success) {
            if(result.data.dates){
              this.dates = result.data.dates;
            }
          }else{
            console.log('error');
            this.loader.dismiss();
          }
        });
      }
  }

  async booking(place) {
    console.log(this.token);
    if (this.token) {
      let placeInfo = JSON.stringify(place)
      const myCalendar = await this.modalCtrl.create({
        component: StartBookingPage,
        componentProps: {
          'placeInfo': placeInfo,
          'dates': JSON.stringify(this.dates)
        }
      });
      myCalendar.present();
      const event: any = await myCalendar.onDidDismiss();
      const date = event.data;
      const from: CalendarResult = date.from;
      const to: CalendarResult = date.to;
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          from: "place-detail"
        },
      };
      this.router.navigate(["login"], navigationExtras);
    }
  }
  hostInfo() {
    console.log("@@hostInfo");
  }

  loadMap(lat?: any, long?: any) {
    let coords = new google.maps.LatLng(lat, long);
    let mapOtions = {
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOtions);
    let marker = new google.maps.Marker({
      map: this.map,
      position: coords,
    });
    google.maps.event.addListener(this.map, "idle", function () {
      google.maps.event.trigger(this.map, "resize");
    });
  }

  back(){
    this.router.navigate(["tabs/tab1"]);
  }

  async review(e,unit){
    e.stopPropagation();
    const modal = await this.modalCtrl.create({
      component: RatingPage,
      cssClass: '',
      componentProps: {
        'unitId' : unit._id,
        'unitName': unit.name
      }
    });
    return await modal.present();
  }
  getReviews(){
    console.log('HEEREE',this.data._id);
    let url = `https://prod.imkloud.com`;
    let params = {
      "auth": {
            "type" : "apiKey",
            "apiKey": "xMvXbsyH2oWgwSHrdJ4mrvxRQfb9MA",
            "orgId" : "4K4CaGGqcmujsffqc"
      },
      pagination : {
        "skip" : 0,
        "limit" : 20
      },
      srcProductId : this.data._id
    };
    this._api.postRequest(url + URL.reviews,params).subscribe(
      (result) => {
        console.log(result);
        if(result.success){
          if(result.data){
            this.reviewCount  = result.data.length;
            this.reviewList = result.data;
          }
        }
      },(error) =>{
        console.log(error);
      });
  }
}
