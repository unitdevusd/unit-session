import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkLogin();
  }
  checkLogin(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.sessionExists().then((res)=>{
      return res;
    }).catch((err)=>{
      return false;
    });
  }
  
  sessionExists(): Promise<any> {
    return new Promise<any>((resolve,reject)=>{
      this.storage.get('session').then((val) => {
        if(val){
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          return reject(false);
        }
      });
    });
  } 
}
