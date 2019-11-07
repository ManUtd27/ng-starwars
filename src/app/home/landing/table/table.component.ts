import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {ClrDatagridStateInterface} from '@clr/angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people = [];
  currentPage = 1;
  total = 0;
  loading = true;
  selected;
  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.selected = undefined;
    this.peopleService.get(this.currentPage).subscribe((data) => {
      this.people = data.results;
      this.total = data.count;
      this.loading = false;
    });
  }
}
