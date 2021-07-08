import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-item-storeage-type',
  templateUrl: './item-storeage-type.page.html',
  styleUrls: ['./item-storeage-type.page.scss'],
})
export class ItemStoreageTypePage implements OnInit {

  private url: any = config.url;
  storedItemType: any = [];
  addType: boolean = false;
  addItemTypeForm: FormGroup;
  token: string;
  typeId: any = '';
  btnText: string = 'Add Storage type.';
  subtypes: any = [];
  orgId: any;


  constructor(
    private _apiService : ApiService,
    private _fb: FormBuilder,
    private loader: LoaderService,
    private alertCtrl: AlertController,
    private _toast: ToastService,
    private storage : Storage
  ) {
    this.addItemTypeForm = this._fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
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
            this.getType();
          }
        });
      }
    });
  }
  getType() {
    if (this.token) {
      const params = {
        token: this.token,
        orgId : this.orgId
      }
      this._apiService.postRequest(this.url + UNITURL.storedItemtype, params).subscribe(
        async (result) => {
          if (result.success) {
            console.log(result.data.list);
            this.storedItemType = result.data.list;
          }
        }
      ), (error) => {
        console.log(error.description);
      }
    }

  }

  editItem(item){
    console.log(item);
    this.addType = true;
    this.btnText = 'Update storage item type.';
    this.typeId = item._id;
    this.addItemTypeForm.controls['name'].setValue(item.name);
    this.addItemTypeForm.controls['description'].setValue(item.description);
  }

  async deleteItemAlert(item){
    console.log(item);
    const alert = await this.alertCtrl.create({
      header: 'Delete storage item types',
      message: 'Do you want to delete '+ item.name + ' from storage item types?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteItem(item._id);
          }
        }
      ]
    });

    await alert.present();
  };

  deleteItem(_id: any) {
   console.log(_id);
    const params = {
      token: this.token,
      itemId: _id,
      orgId : this.orgId
    };
    this._apiService.postRequest(this.url + UNITURL.deleteStoredItemtype, params).subscribe(
      async (result) => {
        if (result.success) {
          this._toast.presentToast(result.message);
          this.getType();
        }
      }
    ), (error) => {
      console.log(error.description);
      this._toast.presentToast(error.description);
    }
  }

  add(){
    console.log('add');
    this.addType = true;
    this.typeId = '';
    this.btnText = 'Add Storage type.';
  }

  cancel(){
    this.addType = !this.addType;
  }

  submit() {
    console.log(this.typeId);
    let formValue = this.addItemTypeForm.value;
    if(this.typeId){
       // update 
      this.loader.present();
      const params = {
        itemTypeId: this.typeId,
        token: this.token,
        ItemTypeName: formValue.name,
        description: formValue.description,
        orgId : this.orgId
      };
      this._apiService.postRequest(this.url + UNITURL.updateStoredItemtype, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addItemTypeForm.reset();
            this.addType = false;
            this.getType();
          }
          this.loader.dismiss();
        }
      ), (error) => {
        this.loader.dismiss();
        console.log(error.description);
        this._toast.presentToast(error.description);
      }
    }else{
      // Add new
      const params = {
        token: this.token,
        itemName: formValue.name,
        description: formValue.description,
        orgId : this.orgId
      };
      this._apiService.postRequest(this.url + UNITURL.addStoredItemtype, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addItemTypeForm.reset();
            this.addType = false;
            this.getType();
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
}
