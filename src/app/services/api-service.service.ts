import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonData: any;

  constructor(public http: HttpClient) { }

  public extractData(res) {
    const body = res;
    return body || {};
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  /*
  POST REQUEST 
  */
  postRequest(url, param) {
    return this.http
      .post(url, param)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      )
  }

  /*
  GET REQUEST 
  */
  getRequest(url) {
    return this.http
      .get(url)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      )
  }

  uploadBase64image(url, params) {
    return new Promise((resolve, reject) => {
      if (!params.base64) {
        resolve({ success: false, message: 'Image data is requried.' });
      }
      console.log(params);
      this.http.post(url, params).subscribe((result: any) => {
        console.log(result);
        resolve(result);
      },
        (error) => {
          console.log(error);
          resolve({ success: false, message: error });
        });
    });
  }


}
