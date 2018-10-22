import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public ajax: AjaxService, private common: CommonService) { }
  public addPersonToDatabase(name: String, address: String, phoneNumber: String): Promise<any> {
    const p = new Promise((resolve, reject) => {
      if (name === '' || address === '' || phoneNumber === '') {
        reject({error: 'Not enough data'});
      }
      const personObject: Object = {
        person : {
          id: 0,
          name: name,
          address: address,
          phoneNumber: phoneNumber
        }
      };
      this.ajax.post(this.common.getBaseUrl() + '/person/add', personObject).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
    return p;
  }
}
