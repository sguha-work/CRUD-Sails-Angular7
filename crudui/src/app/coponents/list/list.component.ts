import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public model: any;
  constructor() {
    this.model = {};
    this.model.dataToDisplay = null;
  }

  ngOnInit() {
  }

}
