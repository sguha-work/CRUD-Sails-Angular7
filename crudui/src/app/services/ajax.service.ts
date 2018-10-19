import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public get(url: string, data?: any): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.http.get(url, data).subscribe((dataFromServer: any) => {
        resolve(dataFromServer);
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }

  public post(url: string, data?: any): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.http.get(url, data).subscribe((dataFromServer: any) => {
        resolve(dataFromServer);
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }
}
