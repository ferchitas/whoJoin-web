import { Component, OnInit } from '@angular/core';
import { AttendanceList } from './attendance.model';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  // public attendanceLists: AttendanceList[] = [];
  constructor() {
    // this.attendanceLists = [
    //   new AttendanceList(1, 'header', 'message', new Date(Date.now()), [])
    // ];
   }

  ngOnInit(): void {
  }

}
