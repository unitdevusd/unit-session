import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  @Input() unitId: string;
  @Input() unitName : string;
  width: any;
  heigth: number;
  source: string;

  constructor(
    public modalCtrl: ModalController,
    public loaderCtrl : LoadingController,
    platform: Platform
  ) { 
    platform.ready().then(() => {
      this.width = platform.width();
      this.heigth = platform.height();
    });
  }
  ngOnInit() {
    console.log(this.unitId);
    console.log(this.unitName);
  this.source = `https://prod.imkloud.com/kuyjkYHd`;
  this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loaderCtrl.create({
      duration: 4000
    });
    await loading.present();
  }
  
  dismissModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
