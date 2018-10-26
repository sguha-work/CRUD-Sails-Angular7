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
          name: name,
          address: address,
          phoneNumber: phoneNumber
        }
      };
      this.ajax.post(this.common.getBaseUrl() + '/person/add', JSON.stringify(personObject)).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
    return p;
  }

  public getAllPerson() {
    return new Promise((resolve, reject) => {
      this.ajax.get(this.common.getBaseUrl() + '/person/get').then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public getPersonById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ajax.get(this.common.getBaseUrl() + '/person/get/' + id).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public updatePersonToDatabase(id: String, name: String, address: String, phoneNumber: String): Promise<any> {
    const p = new Promise((resolve, reject) => {
      if (name === '' || address === '' || phoneNumber === '') {
        reject({error: 'Not enough data'});
      }
      const personObject: Object = {
        person : {
          id: id,
          name: name,
          address: address,
          phoneNumber: phoneNumber
        }
      };
      this.ajax.post(this.common.getBaseUrl() + '/person/update', JSON.stringify(personObject)).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
    return p;
  }

  public deletePerson(id: string) {
    return new Promise((resolve, reject) => {
      this.ajax.get(this.common.getBaseUrl() + '/person/delete/' + id).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
