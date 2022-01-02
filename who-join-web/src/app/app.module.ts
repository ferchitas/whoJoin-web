import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceListListedComponent } from './attendance-list/attendance-list-listed/attendance-list-listed.component';
import { AttendanceListDetailComponent } from './attendance-list/attendance-list-detail/attendance-list-detail.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupDetailComponent } from './group/group-detail/group-detail.component';
import { AttendanceListItemComponent } from './attendance-list/attendance-list-listed/attendance-list-item/attendance-list-item.component';
import { AttendanceListEditComponent } from './attendance-list/attendance-list-detail/attendance-list-edit/attendance-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttendanceListComponent,
    AttendanceListListedComponent,
    AttendanceListDetailComponent,
    GroupComponent,
    GroupListComponent,
    GroupDetailComponent,
    AttendanceListItemComponent,
    AttendanceListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
