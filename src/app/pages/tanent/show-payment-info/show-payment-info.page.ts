import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Storage } from '@ionic/storage';
import { config, UNITURL } from '../../config/config';
import { StartBookingPage } from '../start-booking/start-booking.page';
import { CalendarResult } from 'ion2-calendar';
import { ToastService } from 'src/app/services/toast.service';
import { getDays } from 'src/app/utilities/mainfunction';
import * as moment from 'moment';

@Component({
  selector: 'app-show-payment-info',
  templateUrl: './show-payment-info.page.html',
  styleUrls: ['./show-payment-info.page.scss'],
})
export class ShowPaymentInfoPage implements OnInit {

  public paymentForm: FormGroup;
  url: any = config.url;
  price: any;
  bookingDetails: any;
  cards: any = [];
  profileId: any;
  chargedPrice: any;
  paymentMethod: any = 'full';
  startDate: any;
  discount: any;
  priceAfterDiscount: any;
  priviousPage: any;
  placeDetails: any;
  paymentType = {
    Weekly: 'weekly',
    Monthly: 'monthly',
    Daily: 'daily'
  };
  paymentStatus: string;
  firstMnthPrice: boolean;
  pricewithDiscount: number;
  noOfDays: number;
  weeks: number;
  months: number;
  showDay: boolean;
  showWeek: boolean;
  showMonth: boolean;
  showcardForm: boolean = false;
  dates: any = [];
  directPayment: any;
  token: any;
  orgId: any;


  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private loader: LoaderService,
    private router: Router,
    public _gs: GlobalService,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private storage : Storage,
    private _toast : ToastService
  ) {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required])],
      cardExpiration: ['', Validators.compose([Validators.required])],
      cardCvv: ['', Validators.compose([Validators.required])],
      nameonCard: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log('@@here', params);
        if (params.bookPlaceParams) {
          this.bookingDetails = JSON.parse(params.bookPlaceParams);
        }
        if (params.placeDetails) {
          this.placeDetails = JSON.parse(params.placeDetails);
        }
        if (params.placeData) {
          console.log(JSON.parse(params.placeData));
          let placeData = JSON.parse(params.placeData);
          this.directPayment = placeData;
          this.placeDetails = placeData.place;
          // direct payment 
        }
        if (params.from) {
          this.priviousPage = params.from;
        }
        this.calculatePrice();
      }
    });
  }

  ionViewWillEnter() {
    this.getUserData();
  }

  getUserData() {
    this.storage.get("session").then((session) => {
      if (session) {
        this.storage.get("org").then((org) =>{
          if(org){
            this.token = session;
            this.orgId = org;
            this.getTimings();
            setTimeout(() => {
              this.getPaymentProfile();
            }, 200);
          }
        });
      }
    });
  }

  getTimings() {
    this.loader.present("getting TimeSlots ..");
    if (this.token) {
      const params = {
        placeId: this.placeDetails._id,
        token: this.token,
        orgId : this.orgId
      }
      this.api.postRequest(this.url + UNITURL.getBookingDates, params).subscribe(
        async (result) => {
          this.loader.dismiss();
          if (result.success) {
            if (result.data.dates) {
              this.dates = result.data.dates;
            }
          } else {
            console.log('error');
            this.loader.dismiss();
          }
        });
    }
  }

  getPaymentProfile() {
    this.loader.present('Getting card Info ..');
    if (this.token) {
      const params = {
        token: this.token,
        orgId : this.orgId
      }
      this.api.postRequest(this.url + UNITURL.getCustomerProfile,
        params).subscribe(
          async (result) => {
            console.log(result);
            this.loader.dismiss();
            if (result.success) {
              this.showcardForm = false;
              console.log(result);
              this.cards = result.data.Customer_profile.message.response.profile.paymentProfiles;
              this.profileId = result.data.Customer_profile.message.response.profile.paymentProfiles[0].customerPaymentProfileId;
            }
          }
        ), (error) => {
          this.loader.dismiss();
          console.log('error', error)
        }
    }

  }

  itemDetailNavigation() {
    this._gs.refreshMyStays('true');
    let navigationdata = {
      startDate: this.bookingDetails.startDate,
      endDate: this.bookingDetails.endDate,
      place: {
        name: this.placeDetails.name,
        address: this.placeDetails.address,
        images: this.placeDetails.images
      }
    };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        placeInfo: JSON.stringify(navigationdata)
      }
    };
    this.router.navigate(['confirm-payment'], navigationExtras);
  }

  back() {
    if (this.priviousPage) {
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          placeId: this.bookingDetails.placeId
        }
      };
      this.router.navigate(['start-booking'], navigationExtras);
    }
  }

  async editDates() {
    console.log(this.bookingDetails);
    const myCalendar = await this.modalCtrl.create({
      component: StartBookingPage,
      componentProps: {
        'editInfo': this.bookingDetails,
        'dates': JSON.stringify(this.dates)
      }
    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const from: CalendarResult = date.from;
    const to: CalendarResult = date.to;
  }

  calculatePrice() {

    this.noOfDays = getDays(this.bookingDetails.startDate, this.bookingDetails.endDate);
    console.log(this.noOfDays);
    if (this.noOfDays == 0) {
      this.noOfDays = 1;
    }
    if (this.noOfDays >= 7 && this.noOfDays < 30) {
      this.weeks = Math.round(this.noOfDays / 7);
      this.price = this.placeDetails.pricing.weekly * this.weeks;
      this.paymentStatus = this.paymentType.Weekly;
    } else if (this.noOfDays < 7) {
      this.price = this.placeDetails.pricing.daily * this.noOfDays;
      this.paymentStatus = this.paymentType.Daily;
    } else if (this.noOfDays >= 30) {
      this.months = Math.floor(this.noOfDays / 30);
      this.paymentStatus = this.paymentType.Monthly;
      this.chargedPrice = this.placeDetails.pricing.monthly;
      if (this.months == 1) {
        if (this.placeDetails.discountFirstMonth) {
          // discount
          let numVal1 = this.chargedPrice;
          let numVal2 = this.placeDetails.discountPercentage / 100;
          this.pricewithDiscount = numVal1 - (numVal1 * numVal2);
          this.price = this.chargedPrice;
          this.discount = this.price - this.pricewithDiscount;
        } else {
          // No discount
          this.price = this.placeDetails.pricing.monthly * this.months;
        }
      } else {
        if (this.placeDetails.discountFirstMonth) {
          // discount
          let numVal1 = this.chargedPrice;
          let numVal2 = this.placeDetails.discountPercentage / 100;
          this.pricewithDiscount = numVal1 - (numVal1 * numVal2);
          this.priceAfterDiscount = this.pricewithDiscount;
          this.price = this.placeDetails.pricing.monthly * this.months;
          this.discount = this.chargedPrice - this.pricewithDiscount;
          this.pricewithDiscount = this.price - this.discount;
        } else {
          // No discount
          this.price = this.placeDetails.pricing.monthly * this.months;
        }
      }
    }
    if (this.noOfDays < 7) {
      this.showDay = true;
    }
    if (this.noOfDays >= 7) {
      this.showDay = false;
      this.showWeek = true;
    }
    if (this.weeks < 4) {
      console.log('here');
      this.showWeek = true;
      this.showDay = false;
    }
    if (this.months) {
      this.showWeek = false;
      this.showDay = false;
      this.showMonth = true;
    }
  }

  showCard() {
    this.showcardForm = true;
  }

  onChange(e) { }

  onKey(e) {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  changeformat(date) {
    const d = new Date(date);
    return moment(d).format('MMYY');
  }

  addCard(formvalues) {
    this.loader.present('Adding card ...');
    if (formvalues) {
      if (this.token) {
        let customerInfo = {
          token: this.token,
          orgId : this.orgId,
          creditCard: {
            cardNumber: formvalues.cardNumber,
            expirationDate: this.changeformat(formvalues.cardExpiration)
          }
        }
        this.api
          .postRequest(this.url + UNITURL.createCustomerForPayments, customerInfo)
          .subscribe(async res => {
            console.log(res);
            this.loader.dismiss();
            this.getPaymentProfile();
            if (res.success) {
              this._toast.presentToast("Card added successfully.");
              this.paymentForm.reset();
            } else {
              console.log(res.message);
            }
          }, (error) => {
            this.loader.dismiss();
            console.log('error', error)
          });
      }
    }
  }

  confirmPayment() {
    if(!this.profileId){
      this._toast.presentToast('no card present.Enter card Details.');
      return;
    }
    if (this.token) {
      let formValue = this.bookingDetails;
      const params = {
        token: this.token,
        orgId : this.orgId,
        placeId: this.placeDetails._id,
        startDate: formValue.startDate,
        endDate: formValue.endDate,
        paymentType: this.paymentStatus
      };
      if (this.directPayment) {
        // Direct Payment 
        this.pay(this.directPayment._id, this.price, params);
      } else {
        // Book place then payment
        this.api.postRequest(this.url + UNITURL.booking,
          params).subscribe(
            async (result) => {
              this.loader.dismiss();
              if (result.success) {
                this.pay(result.data.bookingId, this.price, params);
              } else {
                console.log(result.message);
              }
            }
          ), (error) => {
            this.loader.dismiss();
            console.log('error', error)
          }
      }
    }
  }
  
  pay(bookingId: any, price: any, bookingparams) {
    if (this.token) {
      if (this.paymentMethod == 'recurring') {
        console.log('recurring');
        if (this.placeDetails.discountFirstMonth) {
          console.log(this.pricewithDiscount);
          console.log(this.priceAfterDiscount);
          const params = {
            token: this.token,
            orgId : this.orgId,
            customerPaymentProfileId: this.profileId,
            bookingId: bookingId,
            totalPrice: this.priceAfterDiscount
          }
          this.fullPayment(params, true);
        } else {
          // monthly
          const params = {
            token: this.token,
            orgId : this.orgId,
            totalPrice: this.price,
            chargedPrice: this.chargedPrice,
            startDate: bookingparams.startDate,
            addMonth: 0
          }
          this.monthlyPayment(params);
        }
      } else {
        let params = {
          token: this.token,
          orgId : this.orgId,
          customerPaymentProfileId: this.profileId,
          bookingId: bookingId,
          totalPrice: price
        }
        console.log(params);
        this.fullPayment(params, false);
      }

    }


  }

  monthlyPayment(params: { token: string; totalPrice: any; chargedPrice: any; startDate: any; addMonth: Number }) {
    this.loader.present();
    this.api.postRequest(this.url + UNITURL.createSubscription, params).subscribe(
      async (result) => {
        this.loader.dismiss();
        if (result.success) {
          this.itemDetailNavigation();
        } else {
          this.itemDetailNavigation();
          console.log(result.message);
        }
      }
    ), (error) => {
      this.loader.dismiss();
      console.log('error', error)
    }
  }

  fullPayment(params: { token: string; customerPaymentProfileId: any; bookingId: any; totalPrice: any; }, flag) {
    this.loader.present();
    this.api.postRequest(this.url + UNITURL.chargeCustomer,
      params).subscribe(
        async (result) => {
          this.loader.dismiss();
          if (result.success) {
            if (flag) {
              const newParams = {
                token: params.token,
                totalPrice: this.price,
                chargedPrice: this.chargedPrice,
                startDate: this.bookingDetails.startDate,
                endDate: this.bookingDetails.endDate,
                addMonth: 1
              }
              this.monthlyPayment(newParams);
            } else {
              this.itemDetailNavigation();
            }
          }
        }
      ), (error) => {
        this.loader.dismiss();
        console.log('error', error);
      }
  }

}
