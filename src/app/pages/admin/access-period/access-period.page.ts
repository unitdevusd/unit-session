import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { config, UNITURL } from '../../config/config';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-access-period',
  templateUrl: './access-period.page.html',
  styleUrls: ['./access-period.page.scss'],
})
export class AccessPeriodPage implements OnInit {

  

  public url: any = config.url;
  placesType: any = [];
  addType: boolean = false;
  public addPlaceTypeForm: FormGroup;
  token: string;
  typeId: any = '';
  btnText: string = 'Add Access type';
  subtypes: any = [];
  orgId: any;

  constructor(
    public _apiService: ApiService,
    public _fb: FormBuilder,
    public loader: LoaderService,
    public alertCtrl: AlertController,
    public _toast: ToastService,
    public storage : Storage
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
          this._apiService.postRequest(this.url + UNITURL.accessTimeList, params).subscribe(
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
      this.loader.present()
      const params = {
        accessTimeId: this.typeId,
        token: this.token,
        accessTime: formValue.type,
        description: formValue.description,
        orgId : this.orgId
      };

      this._apiService.postRequest(this.url + UNITURL.updateAccessTime, params).subscribe(
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
        accessTimeName: formValue.type,
        description: formValue.description,
        orgId : this.orgId
      }
      console.log(params);

      this._apiService.postRequest(this.url + UNITURL.addAccessTime, params).subscribe(
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
    this.btnText = 'Update Access type';
    this.typeId = placeType._id;
    this.addPlaceTypeForm.controls['type'].setValue(placeType.accessTime);
    this.addPlaceTypeForm.controls['description'].setValue(placeType.description);
  };

  async deleteTypeAlert(property) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Access type',
      message: 'Do you want to delete ' + property.type + ' from type ?',
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
    this._apiService.postRequest(this.url + UNITURL.deleteAccessTimeType, params).subscribe(
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
    this.btnText = 'Add Access type';
    this.addPlaceTypeForm.reset();
  }
  onSelectChange(ev) {
    this.subtypes = [];

  }
}

