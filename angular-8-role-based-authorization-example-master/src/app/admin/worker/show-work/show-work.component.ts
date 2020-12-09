import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-work',
  templateUrl: './show-work.component.html',
  styleUrls: ['./show-work.component.less']
})
export class ShowWorkComponent implements OnInit {

  constructor(private service:SharedService) { }

  WorkerList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  work:any;

  idWorkerFilter:string="";
  FIOFilter:string="";
  workingExperienceFilter:string="";
  salaryFilter:string="";
  
  WorkerListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshWorkList();
  }

  addClick(){
    this.work={
      idWorker:0,
      FIO:"",
      workingExperience:"",
      salary:""
    }
    this.ModalTitle="Add worker";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.work=item;
    this.ModalTitle="Edit worker";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshWorkList();
  }


  refreshWorkList(){
    this.service.getWorker().subscribe(data=>{
      this.WorkerList=data;
      this.WorkerListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idWorkerFilter = this.idWorkerFilter;
    var FIOFilter = this.FIOFilter;
    var workingExperienceFilter = this.workingExperienceFilter;
    var salaryFilter = this.salaryFilter;

    this.WorkerList = this.WorkerListWithoutFilter.filter(function (el: { idWorker: { toString: () => string; }; FIO: { toString: () => string; }; workingExperience: { toString: () => string; }; salary: { toString: () => string; }; }){
        return el.idWorker.toString().toLowerCase().includes(
          idWorkerFilter.toString().trim().toLowerCase()
        )&&
        el.FIO.toString().toLowerCase().includes(
          FIOFilter.toString().trim().toLowerCase()
        )&&
        el.workingExperience.toString().toLowerCase().includes(
          workingExperienceFilter.toString().trim().toLowerCase()
        )&&
        el.salary.toString().toLowerCase().includes(
          salaryFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.WorkerList = this.WorkerListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
