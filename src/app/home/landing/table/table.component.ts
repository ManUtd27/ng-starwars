import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users = [{id: 1, name: 'Shawn'}, {id: 2, name: 'Amanda'}];
  constructor() { }

  ngOnInit() {
  }

}
