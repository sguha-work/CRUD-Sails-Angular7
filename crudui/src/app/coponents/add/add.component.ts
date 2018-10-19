import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public name: String = '';
  public address: String = '';
  public phoneNumber: String = '';
  constructor() { }

  ngOnInit() {
  }

}
