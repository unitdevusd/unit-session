import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-access-type',
  templateUrl: './access-type.page.html',
  styleUrls: ['./access-type.page.scss'],
})
export class AccessTypePage implements OnInit {


  private url: any = config.url;
  placesType: any = [];
  addType: boolean = false;
  private addPlaceTypeForm: FormGroup;
  token: string;
  typeId: any = '';
  btnText: string = 'Add Access time';
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
    this.addPlaceTypeForm = this._fb.group({
      type: new FormControl('', Validators.required),
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
          this._apiService.postRequest(this.url + UNITURL.accessTypeList, params).subscribe(
            async (result) => {
              if (result.success) {
                console.log(result.data.list);
                this.placesType = result.data.list;
              }
            }
          ), (error) => {
            console.log(error.description);
          }
        }
  }

  submit() {
    let formValue = this.addPlaceTypeForm.value;
    if (this.typeId) {
      this.loader.present();
      const params = {
        accessTypeId: this.typeId,
        token: this.token,
        accessType: formValue.type,
        description: formValue.description,
        orgId : this.orgId
      }

      console.log('@@',params);

      this._apiService.postRequest(this.url + UNITURL.updateAccessType, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addPlaceTypeForm.reset();
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
    } else {
      const params = {
        token: this.token,
        accessTypeName: formValue.type,
        description: formValue.description,
        orgId : this.orgId
      }
      console.log(params);

      this._apiService.postRequest(this.url + UNITURL.addAccessType, params).subscribe(
        async (result) => {
          if (result.success) {
            this._toast.presentToast(result.message);
            this.addPlaceTypeForm.reset();
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
  cancel() {
    this.addType = !this.addType;
  }

  editType(placeType) {
    console.log('11', placeType);
    this.addType = true;
    this.btnText = 'Update Access time';
    this.typeId = placeType._id;
    this.addPlaceTypeForm.controls['type'].setValue(placeType.accessType);
    this.addPlaceTypeForm.controls['description'].setValue(placeType.description);
  };

  async deleteTypeAlert(property) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Access Time',
      message: 'Do you want to delete ' + property.type + ' from time ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteType(property._id);
          }
        }
      ]
    });

    await alert.present();
  }
  deleteType(_id: any) {
    const params = {
      token: this.token,
      accessTypeId: _id,
      orgId : this.orgId
    }
    this._apiService.postRequest(this.url + UNITURL.deleteAccessType, params).subscribe(
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
  add() {
    this.addType = true;
    this.typeId = '';
    this.btnText = 'Add Access time';
    this.addPlaceTypeForm.reset();
  }
  onSelectChange(ev) {
    this.subtypes = [];

  }
}
