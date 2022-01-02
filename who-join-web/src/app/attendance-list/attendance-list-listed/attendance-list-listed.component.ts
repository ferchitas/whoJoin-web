import { Component, OnInit } from '@angular/core';
import { AttendanceList } from '../attendance.model';

@Component({
  selector: 'app-attendance-list-listed',
  templateUrl: './attendance-list-listed.component.html',
  styleUrls: ['./attendance-list-listed.component.css']
})
export class AttendanceListListedComponent implements OnInit {

  public attendanceLists: AttendanceList[] = [];
  constructor() {
    this.attendanceLists = [
         new AttendanceList(1, 'header', 'message', new Date(Date.now()), []),
         new AttendanceList(1, 'header', 'message', new Date(Date.now()), [])   
       ];
  }

  ngOnInit(): void {
  }

}
