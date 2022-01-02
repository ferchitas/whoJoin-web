import { Component, OnInit } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styles: [
  ]
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [];

  constructor() {

    this.groups = [
      new Group(0, "Test group", [], [], []),
      new Group(0, "Test group1", [], [], []),
    ];
  }

  ngOnInit(): void {
  }

}
