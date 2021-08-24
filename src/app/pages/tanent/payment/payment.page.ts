import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  public cards: any = [];
  public paymentForm: FormGroup;
  url: any = config.url;
  showAddCard: Boolean = false;
  token: any;
  orgId: any;

  constructor(
    public formBuilder: FormBuilder,
    public api: ApiService,
    public loader: LoaderService,
    public _toast : ToastService,
    public alertController: AlertController,
    public storage : Storage
    ) {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required])],
      cardExpiration: ['', Validators.compose([Validators.required])],
      cardCvv: ['', Validators.compose([Validators.required])]
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
            this.getPaymentProfile();
          }
        });
      }
    });
  }

  ionViewWillEnter(){
  
  }

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

  getPaymentProfile() {
    this.loader.present();
    if (this.token) {
        const params = {
          token: this.token,
          orgId : this.orgId
        }
        this.api.postRequest(this.url + UNITURL.getCustomerProfile,
          params).subscribe(
            async (result) => {
              this.loader.dismiss();
              if (result.success) {
                console.log(result);
                this.cards = result.data.Customer_profile.message.response.profile.paymentProfiles;

                if (this.cards.length == 0){
                  this.showAddCard = true;
                }else{
                  this.showAddCard = false;
                }
                console.log(this.cards);
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
  async delete(card){
    console.log('@@', card);
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure that you want to delete this card?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Ok',
          handler: () => {
            this.deleteCard(card);
          }
        }
      ]
    });
    await alert.present();
  }
  deleteCard(card) {
    this.loader.present();
    if (this.token) {
        const params = {
          token: this.token,
          orgId : this.orgId
        }
        this.api.postRequest(this.url + UNITURL.deleteCustomerProfile,
          params).subscribe(
            async (result) => {
              this.loader.dismiss();
              if (result.success) {
                this.cards = this.cards.filter(x => x.customerPaymentProfileId != x.customerPaymentProfileId);
              }
            }), (error) => {
            this.loader.dismiss();
            console.log('error', error)
          }
    }
  }
}
