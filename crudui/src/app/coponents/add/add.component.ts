import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../services/person.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public name: String = '';
  public address: String = '';
  public phoneNumber: String = '';
  constructor(private person: PersonService) { }

  ngOnInit() {
  }

  /**
   * This method submit date to person service from where it calls the api to store datas
   */
  public submitData() {
      this.person.addPersonToDatabase(this.name, this.address, this.phoneNumber).then((data) => {
        console.log('data', data);
        alert('Data added successfully');
      }).catch((error) => {
        console.log('error', error);
        alert('Error occured to add data');
      });
  }
}
