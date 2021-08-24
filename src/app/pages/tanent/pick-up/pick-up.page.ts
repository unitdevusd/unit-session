import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.page.html',
  styleUrls: ['./pick-up.page.scss'],
})
export class PickUpPage implements OnInit {

  pickUpForm: FormGroup;
  url: any = config.url;
  bookingId: String;
  pickUpDate: any;
  token: any;
  orgId: any;
 
  constructor(
    public router: Router,
    public _fb: FormBuilder,
    public _api: ApiService,
    public route: ActivatedRoute,
    public toast: ToastService,
    public storage : Storage
  ) {

    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log(params);
        this.bookingId = params.bookingId;
        this.pickUpDate = Number(params.endDate);
        var d = new Date(this.pickUpDate);
        var n = d.toISOString();
        this.pickUpDate = n;
        this.initpickUpform();
      }
    });


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

  initpickUpform() {

    this.pickUpForm = this._fb.group({
      pickupDate: ['', Validators.required],
      description: ['', Validators.required]
    });
    console.log(this.pickUpDate);
    let pickup = moment(this.pickUpDate).format('MMM DD, YYYY');
    console.log(pickup);

    this.pickUpForm.controls['pickupDate'].setValue(pickup);
  }

  back() {
    this.router.navigate(['tabs/tab3']);
  }

  pickUp() {
    console.log(this.pickUpForm.value);
    if(this.pickUpForm.value.pickupDate <= this.pickUpDate ){
      this.toast.presentToast('please Enter date grater than pickUpDate');
      return;
    }
    if (this.token) {
      console.log(this.pickUpForm.value);
      const params = {
        bookingId: this.bookingId,
        token: this.token,
        orgId : this.orgId,
        pickUpDate: this.pickUpForm.value.pickupDate,
        description: this.pickUpForm.value.description
      };
      this._api.postRequest(this.url + UNITURL.schedulePickup, params)
        .subscribe((result) => {
          console.log(result);
          if(result.success){
            this.toast.presentToast('your pickup scheduled Successfully!..');
            this.back();
          }
        }, error => {
          console.log(error);
        });
    }

  }

}
