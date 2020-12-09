import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-manw',
  templateUrl: './add-edit-manw.component.html',
  styleUrls: ['./add-edit-manw.component.less']
})
export class AddEditManwComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() manW:any;
  idManagementWorkers:string="";
  job:string="";
  id_managementWorkers_worker:string="";
  
  WorkerListL:any=[];
 
  ngOnInit(): void {
    this.loadWorkerListL();
    
  }

  loadWorkerListL() {
    this.service.getAllmwNames().subscribe((data:any)=>{
    this.WorkerListL=data;
    this.idManagementWorkers=this.manW.idManagementWorkers;
    this.job=this.manW.job;
    this.id_managementWorkers_worker=this.manW.id_managementWorkers_worker;
  });
  }

  

  addManagementWorkers(){
    var val = {idManagementWorkers:this.idManagementWorkers,
      job:this.job,
      id_managementWorkers_worker:this.id_managementWorkers_worker};
    this.service.addManagementWorkers(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateManagementWorkers(){
    var val = {idManagementWorkers:this.idManagementWorkers,
      job:this.job,
      id_managementWorkers_worker:this.id_managementWorkers_worker};
    this.service.updateManagementWorkers(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
