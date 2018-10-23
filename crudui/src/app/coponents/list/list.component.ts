import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../services/person.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public model: any;
  constructor(private person: PersonService) {
    this.model = {};
    this.model.dataToDisplay = null;
  }

  ngOnInit() {
    this.person.getAllPerson().then((data) => {
      this.model.dataToDisplay = data['persons'];
      console.log(this.model.dataToDisplay);
    }).catch(() => {
      alert('Unable to get data');
      this.model.dataToDisplay = null;
    });
  }

}
