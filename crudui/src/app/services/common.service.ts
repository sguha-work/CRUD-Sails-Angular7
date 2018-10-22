import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public getBaseUrl(): String {
    return 'http://192.168.56.102:1337';
  }
}
