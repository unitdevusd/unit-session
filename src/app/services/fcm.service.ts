import { Injectable, NgZone } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
} from '@capacitor/core';
import { ApiService } from './api-service.service';
import { config, KEY, UNITURL } from '../pages/config/config';
import { GlobalService } from './global.service';
import { Storage } from '@ionic/storage';

const { PushNotifications,Device } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class FcmService {
  
  private url: any = config.url;
  constructor(
    private _apiService : ApiService,
    private zone: NgZone,
    private _gs : GlobalService,
    private storage: Storage

    ) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

   private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      async (token: PushNotificationToken) => {
        let tokeninfo : any = token;
        if(tokeninfo){
          this.storage.set("fcm_token", tokeninfo.value);
        }
        const info = await Device.getInfo();
        const deviceInfo = {
          apiKey : KEY.apikey,
          deviceId : info.uuid,
          firebaseToken: tokeninfo.value,
          deviceType: info.operatingSystem,
          enableNotifications : true
        };
        this._apiService.postRequest(this.url + UNITURL.saveDevice,deviceInfo).subscribe(
          async (result) => {
            console.log(result);
          }, (error) => {
            console.log('error', error)
          }

        )
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        // navigate to page according to  api info
        if (data.notificationType) {
          console.log('Action performed: ' + data.notificationType);
          this.zone.run(() => {
            this._gs.fcmData(data.notification);
          });
        }
      }
    );
  }
  
 
}
