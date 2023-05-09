import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/studentinter';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  stdArray:Array<Istudent>=[]
  constructor(private _StudentService:StudentService) { }

  ngOnInit(): void {
   this.stdArray=this._StudentService.getallArray()
  }

  onDeleteStudent(id:string,fname:string){
    this._StudentService.onremoveStd(id,fname)
  }
  
}
