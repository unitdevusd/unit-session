import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ToastService } from 'src/app/services/toast.service';
import { config } from '../../config/config';

@Component({
  selector: 'app-start-booking',
  templateUrl: './start-booking.page.html',
  styleUrls: ['./start-booking.page.scss'],
})
export class StartBookingPage implements OnInit {

  @Input() placeInfo: any;
  @Input() editInfo : any;
  @Input() dates : any;
  url: any = config.url;
  placeDetails: any;
  
  dateRange: { from: string; to: string; };
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    daysConfig: []
  };
  event: any;
  description: any;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navParams: NavParams,
    public modalCtrl : ModalController,
    public toast : ToastService
  ) {
    if(navParams.get('placeInfo')){
      this.placeInfo = JSON.parse(navParams.get('placeInfo'));
      console.log(this.placeInfo);
    }
    if(navParams.get('editInfo')){
      let params = navParams.get('editInfo');
      this.description = params.desc;
      this.dateRange = {
        from: params.startDate,
        to : params.endDate
      };
    };
    if(navParams.get('dates')){
      console.log(JSON.parse(navParams.get('dates')));
      Object.assign(this.optionsRange, { daysConfig: JSON.parse(navParams.get('dates')) });
    }
    let d = new Date();
    let year = d.getFullYear();
    if (year) {
      year = year + 1;
    }
    Object.assign(this.optionsRange, { to: new Date(year, 11.1) });
    this.route.queryParams.subscribe(params => {
      if (params.place)
        this.placeDetails = JSON.parse(params.place);
    });
  }


  ngOnInit() {}
  

  onChange(event) {
    this.event = event;
  }


  book() {
    if (!this.event) {
      this.toast.presentToast('Please select start Date and end Date');
      return;
    }
      let params = {};
      if(this.event){
         params = {
          startDate: this.event.from._i,
          endDate: this.event.to._i,
          desc: this.description
        };
      }else{
        params = {
          startDate: this.dateRange.from,
          endDate: this.dateRange.to,
          desc: this.description
        };
      }
      console.log('@@',params);
      // return;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        bookPlaceParams: JSON.stringify(params),
        placeDetails: this.placeInfo
      }
    };
    this.router.navigate(['show-payment-info'], navigationExtras);
    this.dismissModal();
  }

  dismissModal() {
    console.log('dismiss');
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  renterTags:any;
tags = [];

// doSomething(tag){
//      if(this.doValidate(tag)){
//         this.tags.push(tag);
//         this.renterTags = '';  // reset ngModel it will clear old value
//      }
// }

removeItem(i){
     this.tags.splice(i, 1)
}
  
}
