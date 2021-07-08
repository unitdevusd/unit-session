import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-revenue-share',
  templateUrl: './revenue-share.page.html',
  styleUrls: ['./revenue-share.page.scss'],
})
export class RevenueSharePage implements OnInit {
  private url: any = config.url;
  private revenueShareForm: FormGroup;
  token: string;
  priceId: any = '';
  priceTypeOptions = [
    { view: "Fixed Price", value: "fixed" },
    { view: "Percentage", value: "percentage" }
  ];
  countryList = [
    { view: "USA", value: "usa" },
    { view: "India", value: "ind" }
  ];

  addPrice: boolean = false;
  btnText: string = 'Add Revenue Share';
  priceList: any = [];
  orgId: any;


  constructor(
    private _apiService: ApiService,
    private _fb: FormBuilder,
    private loader: LoaderService,
    private alertCtrl: AlertController,
    private _toast: ToastService,
    private storage : Storage
  ) {
    this.revenueShareForm = this._fb.group({
      country: new FormControl('', Validators.required),
      pricetype: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
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
            this.getPrices();
          }
        });
      }
    });
  }
  getPrices() {
    if (this.token) {
          const params = {
            token: this.token,
            orgId : this.orgId
          }
          this._apiService.postRequest(this.url + UNITURL.revenueShareList, params).subscribe(
            async (result) => {
              if (result.success) {
                console.log(result.data.list);
                this.priceList = result.data.list;
              }
            }
          ), (error) => {
            console.log(error.description);
          }
        }
  }

  onSelectChange(ev) {
    console.log(ev);
  }
  cancel() {
    this.addPrice = !this.addPrice;
  }
  submit() {
    let formValue = this.revenueShareForm.value;
    if (this.priceId) {
      this.loader.present();
      const params = {
        shareId: this.priceId,
        token: this.token,
        country: formValue.country,
        pricetype: formValue.pricetype,
        price: formValue.price,
        orgId : this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.updaterevenueShare, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.revenueShareForm.reset();
            this.addPrice = false;
            this.getPrices();
          }
          this.loader.dismiss();
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
    } else {
      const params = {
        token: this.token,
        country: formValue.country,
        pricetype: formValue.pricetype,
        price: formValue.price,
        orgId : this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.addrevenueShare, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.revenueShareForm.reset();
            this.addPrice = false;
            this.getPrices();
          }
          this.loader.dismiss();
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
    }
  }

  editPrice(p) {
    console.log(p);
    this.addPrice = true;
    this.btnText = 'Update Revenue Share';
    this.priceId = p._id;
    this.revenueShareForm.controls['country'].setValue(p.country);
    this.revenueShareForm.controls['pricetype'].setValue(p.pricetype);
    this.revenueShareForm.controls['price'].setValue(p.price);
  }
  async deletePriceAlert(p) {
    console.log(p);
    const alert = await this.alertCtrl.create({
      header: 'Delete Property Type',
      message: 'Do you want to delete ' + p.pricetype + ' from revenue Share ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Delete',
          handler: () => {
            this.deletePrice(p._id);
          }
        }
      ]
    });

    await alert.present();
  }

  deletePrice(_id) {
    console.log('delte');
    const params = {
      token: this.token,
      shareId: _id,
      orgId : this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.deleterevenueShare, params).subscribe(
      async (result) => {
        if (result.success) {
          this._toast.presentToast(result.message);
          this.getPrices();
        }
      }
    ), (error) => {
      console.log(error.description);
      this._toast.presentToast(error.description);
    }
  }
  add() {
    this.addPrice = true;
    this.priceId = '';
    this.btnText = 'Add Revenue Share';
  }


}
