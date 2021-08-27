import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {

  placeInfo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _gs : GlobalService
  ) { 
    this.route.queryParams.subscribe(params => {
      if(params)
      this.placeInfo = JSON.parse(params.placeInfo);
      console.log('@@', this.placeInfo);
    });

  }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['tabs/tab1']);
  }
  booking(){
    this._gs.refreshMyStays("true");
    this.router.navigate(['tabs/tab2']);
  }

}
