import { Injectable } from '@angular/core';
import { Istudent } from '../model/studentinter';
import { student } from '../const/studentArray';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   studentsArray:Array<Istudent>=student
  constructor(private _snackbarService:SnackbarService) { }


  getallArray():Array<Istudent>{
   return this.studentsArray
  }

  addstudent(obj:Istudent):void{
    
    this.studentsArray.push(obj)
    console.log(this.studentsArray)
    this._snackbarService.openSnackBar(`${obj.fname} is added sucessfully`)
  }

  onremoveStd(id:string,fname:string){
   let findid = this.studentsArray.findIndex(ele=>
               ele.id === id   
   )
   this.studentsArray.splice(findid,1)
   this._snackbarService.openSnackBar(`${fname} is deleted sucessfully`)
  }

}
