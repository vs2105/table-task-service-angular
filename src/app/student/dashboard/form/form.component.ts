import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/studentinter';
import { StudentService } from 'src/app/shared/services/student.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private _UtilityService:UtilityService,
    private _StudentService:StudentService
        ) { }

  ngOnInit(): void {
  }

  onAddStudent(fname:HTMLInputElement,lname:HTMLInputElement,age:HTMLInputElement,contact:HTMLInputElement){
    if(fname.value.length > 0 && lname.value.length > 0 && age.value.length > 0 && contact.value.length > 0){
      let studentobj:Istudent={
        fname:fname.value,
        lname:lname.value,
        age:+age.value,
        contact:+contact.value,
        id:this._UtilityService.uuid()
       }
       fname.value='';
       lname.value='';
       age.value='';
       contact.value=''
       this._StudentService.addstudent(studentobj)
    } 
  }
}
