import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-manw',
  templateUrl: './show-manw.component.html',
  styleUrls: ['./show-manw.component.less']
})
export class ShowManwComponent implements OnInit {

  constructor(private service:SharedService) { }

  ManWList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  manW:any;

  idManagementWorkersFilter:string="";
  jobFilter:string="";
  idmanagementWorkersworkerFilter:string="";
 
  ManWListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshManWListList();
  }

  addClick(){
    this.manW={
      idManagementWorkers:0,
      job:"",
      id_managementWorkers_worker:""
    }
    this.ModalTitle="Add management worker";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.manW=item;
      this.ModalTitle="Edit management worker";
      this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshManWListList();
  }

  refreshManWListList(){
    this.service.getManagementWorkers().subscribe(data=>{
        this.ManWList=data;
        this.ManWListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idManagementWorkersFilter = this.idManagementWorkersFilter;
    var jobFilter = this.jobFilter;
    var idmanagementWorkersworkerFilter = this.idmanagementWorkersworkerFilter;

    this.ManWList = this.ManWListWithoutFilter.filter(function (el){
        return el.idManagementWorkers.toString().toLowerCase().includes(
          idManagementWorkersFilter.toString().trim().toLowerCase()
        )&&
        el.job.toString().toLowerCase().includes(
          jobFilter.toString().trim().toLowerCase()
        )
        &&
        el.id_managementWorkers_worker.toString().toLowerCase().includes(
          idmanagementWorkersworkerFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.ManWList = this.ManWListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
