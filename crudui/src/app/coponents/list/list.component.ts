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

  /**
   *
   * @param event This method calls the deletePerson method of person service to delete a person by its ID
   */
  public delete(event) {
    if (window.confirm('Do you really want to delete this data')) {
      this.person.deletePerson(event.currentTarget.getAttribute('id')).then(() => {
        alert('Deleted');
        window.location.reload();
      }).catch(() => {
        alert('Unable to delete data, try after sometime');
      });
    }
  }

  ngOnInit() {
    /**
     * The getAllPerson method resides in person service  which return all person data
     */
    this.person.getAllPerson().then((data) => {
      this.model.dataToDisplay = data['persons'];
      console.log(this.model.dataToDisplay);
    }).catch(() => {
      alert('Unable to get data');
      this.model.dataToDisplay = null;
    });
  }

}
