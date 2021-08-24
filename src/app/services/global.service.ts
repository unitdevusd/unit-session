import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  

  constructor() { }

  public subject = new Subject<any>();
  public status = new Subject<any> ();
  public logout = new Subject<any>();
  public filterObject = new Subject<any>();
  public refresh = new Subject<any> ();
  public refershMyStays = new Subject<any> ();
  public fcmInfo = new Subject<any> ();
  // Used For update  users
  sendData(user) {
    this.subject.next(user);
  }

  clearData() {
    this.subject.next();
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }


  // Update tabs
  updateTabs(status) {
    this.status.next(status);
  }

  getUpdatedTabs(): Observable<any> {
    return this.status.asObservable();
  }

  // logOut 
  logOut(){
    this.logout.next(true);
  }
  getLogOut(): Observable<any> {
    return this.logout.asObservable();
  }


  /*
  REFRESH FILTERS
  */
 setFilterRefresh(refresh: any) {
  this.filterObject.next({ refresh: refresh });
}

applyFilters() {
  return this.filterObject.asObservable();
}

  /*
  REFRESH MY PLACES FOR HOST
  */
 sendRefershScreen(refresh: string) {
  this.refresh.next({ refresh: refresh });
}

getRefreshScreen() {
  return this.refresh.asObservable();
}

clearRefresh() {
  this.refresh.next();
}



/*
  REFRESH MY STAYS
  */

 refreshMyStays(refresh: string) {
  this.refershMyStays.next({ refresh: refresh });
}

getMyStaysRefresh() {
  return this.refershMyStays.asObservable();
}

clearMyStaysObserver() {
  this.refershMyStays.next();
}

/*
FCM data
*/
fcmData(refresh: string) {
  this.fcmInfo.next({ refresh: refresh });
}

getfcmData() {
  return this.fcmInfo.asObservable();
}

clearfcmData() {
  this.fcmInfo.next();
}

}
