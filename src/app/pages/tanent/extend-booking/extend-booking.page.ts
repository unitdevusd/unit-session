import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-extend-booking',
  templateUrl: './extend-booking.page.html',
  styleUrls: ['./extend-booking.page.scss'],
})
export class ExtendBookingPage implements OnInit {

  extensionForm: FormGroup;
  url: any = config.url;
  strDate: any;
  bookingId: string;
  token: any;
  orgId: any;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _api: ApiService,
    private route: ActivatedRoute,
    private toast : ToastService,
    private storage : Storage
  ) {
    this.setUpForm();
  }

  ngOnInit() {
    this.getUserData();
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.bookingId = params.bookingId;
        this.strDate = Number(params.startDate);
        var d = new Date(this.strDate);
        var n = d.toISOString();
        this.strDate = n;
        this.setUpForm();
      }
    });
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

  setUpForm() {
    this.extensionForm = this._fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required]
    });
    console.log(this.strDate);
    let startDate = moment(this.strDate).format('MMM DD, YYYY');
    this.extensionForm.controls['startDate'].setValue(startDate);
  }

  back() {
    this.router.navigate(['tabs/tab3']);
  }

  endDateChange(ev) {
    console.log(ev);
  }
  extensionRequest() {
    let endDate = moment(this.extensionForm.value.endDate).format('MMM DD, YYYY');
    console.log(endDate);
    if(endDate <= this.extensionForm.value.startDate ){
      this.toast.presentToast('please Enter date grater than start Date');
      return;
    }
    if (this.token) {
      const params = {
        bookingId: this.bookingId,
        token: this.token,
        orgId : this.orgId,
        startDate: this.extensionForm.value.startDate,
        endDate: this.extensionForm.value.endDate,
        description: this.extensionForm.value.description
      };
      this._api.postRequest(this.url + UNITURL.extensionRequest, params)
        .subscribe((result) => {
          console.log(result);
          if(result.success){
            this.toast.presentToast('Extension Request send Successfully!..');
            this.back();
          }
        }, error => {
          console.log(error);
        });
    }
  }
}
