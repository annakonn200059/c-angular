import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-maninf',
  templateUrl: './add-edit-maninf.component.html',
  styleUrls: ['./add-edit-maninf.component.less']
})
export class AddEditManinfComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() manInf:any;
  Name:string="";
  number:string="";
  job:string="";
  workingExperience:string="";

  
  ngOnInit(): void{
      this.Name=this.manInf.Name;
      this.number=this.manInf.number;
      this.job=this.manInf.job;
      this.workingExperience=this.manInf.workingExperience;
  }

  addManagerInfo(){
    var val = {Name:this.Name,
      number:this.number,
      job:this.job,
      workingExperience:this.workingExperience};
    this.service.addManagerInfo(val).subscribe(res=>{
      alert(res.toString());
    });

  }


}
