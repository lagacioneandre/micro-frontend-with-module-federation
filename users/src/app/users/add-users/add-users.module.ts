import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users.component';
import { AddRoutingModule } from './add-routing.module';



@NgModule({
  declarations: [
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddUsersModule { }
