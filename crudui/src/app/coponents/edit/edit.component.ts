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
  constructor(private route: ActivatedRoute, private person: PersonService) {
    this.model = {};
    this.model.data = {};
    this.hardReset();
    this.getPersonDetails();
  }

  private hardReset() {
    this.model.data.id = '';
    this.model.data.name = '';
    this.model.data.address = '';
    this.model.data.phoneNumber = '';
  }

  public getPersonDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person.getPersonById(id.toString()).then((data) => {
      this.model.data = data;
    }).catch(() => {
      alert('Unable to fetch data. Please try after sometime');
    });
  }

  ngOnInit() {
  }

}
