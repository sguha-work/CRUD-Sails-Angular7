import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from './../../services/person.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public model: any;
  private personData: any;
  constructor(private route: ActivatedRoute, private person: PersonService) {
    this.model = {};
    this.model.data = {};
    this.hardReset();
    this.getPersonDetails();
  }

  /**
   * This method is called to setup the initial values for Model
   */
  private hardReset() {
    this.model.data.id = '';
    this.model.data.name = '';
    this.model.data.address = '';
    this.model.data.phoneNumber = '';
  }

  /**
   * This method using person service fetch details of perticuler person
   */
  public getPersonDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person.getPersonById(id.toString()).then((data) => {
      this.model.data = data;
      this.personData = data;
    }).catch(() => {
      alert('Unable to fetch data. Please try after sometime');
    });
  }

  /**
   * After editing this method use person service to store the updated data
   */
  public submit() {
    this.person.updatePersonToDatabase(this.model.data.id, this.model.data.name, this.model.data.address,
      this.model.data.phoneNumber).then(() => {
      alert('data updated');
    }).catch(() => {
      alert('Unable to update, try again');
    });
  }

  public resetFields() {
    this.model.data = this.personData;
  }

  ngOnInit() {
  }

}
