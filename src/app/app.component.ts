import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './services/fcm.service';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

const { Network} = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
  })
export class AppComponent {

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _loader: LoadingController,
    private fcmService: FcmService,
    private ga: GoogleAnalytics
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.networkListener = Network.addListener('networkStatusChange', (status) => {
        this.networkStatus = status;
        if (this.networkStatus.connected) {
          this._loader.dismiss();
        } else {
          this.presentLoading('You are offline. Waiting for internet connection.');
          }
      });
      this.networkStatus = await Network.getStatus();
      // Trigger the push setup 

      this.fcmService.initPush();
  //     this.ga.startTrackerWithId('G-280502510')
  //     .then(() => {
  //       console.log('Google analytics is ready now');
  //       this.ga.trackView('Outbox') 
  //       .then(() => {

  //       })
  //       .catch(
  //         error => console.log(error)
  //       );  
  //      }).catch(
  //       error => console.log('Google Analytics Error: ' + error)
  //     );
      
  //   });
  // }

  // // Track an event:
  // trackEvent(val) {
  //   // Label and Value are optional, Value is numeric
  //   this.ga.trackEvent('Category', 'Action', 'Label', val)
  // }  

    });
  }
  async presentLoading(message) {
    const loading = await this._loader.create({
      message,
    });
    return await loading.present();
  }
}
