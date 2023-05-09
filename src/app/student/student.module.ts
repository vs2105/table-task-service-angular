import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './dashboard/form/form.component';
import { TableComponent } from './dashboard/table/table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule  
  ],
  exports:[DashboardComponent]
})
export class StudentModule { }
