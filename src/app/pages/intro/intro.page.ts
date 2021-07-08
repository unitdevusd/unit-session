import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { GlobalService } from 'src/app/services/global.service';
// import { FcmService } from 'src/app/services/fcm.service';
import { config, KEY, UNITURL } from '../config/config';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  private url: any = config.url;
  
  constructor(
    private router: Router,
    private _apiService : ApiService,
    private _gs: GlobalService
    ) { 
      
  }

  ngOnInit() {}
  



  skip(){
    this.router.navigate(['tabs/tab1']);
  }
}
