import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-work',
  templateUrl: './add-edit-work.component.html',
  styleUrls: ['./add-edit-work.component.less']
})
export class AddEditWorkComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() work:any;
  idWorker:string="";
  FIO:string="";
  workingExperience:string="";
  salary:string="";
  
  ngOnInit(): void{
      this.idWorker=this.work.idWorker;
      this.FIO=this.work.FIO;
      this.workingExperience=this.work.workingExperience;
      this.salary=this.work.salary;
  }

  addWorker(){
    var val = {idWorker:this.idWorker,
      FIO:this.FIO,
      workingExperience:this.workingExperience,
      salary:this.salary
    };
    this.service.addWorker(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateWorker(){
    var val = {idWorker:this.idWorker,
      FIO:this.FIO,
      workingExperience:this.workingExperience,
      salary:this.salary
    };
    this.service.updateWorker(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
