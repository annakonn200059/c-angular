import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-maninf',
  templateUrl: './show-maninf.component.html',
  styleUrls: ['./show-maninf.component.less']
})
export class ShowManinfComponent implements OnInit {

  constructor(private service:SharedService) { }

  ManInfList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  manInf:any;

  NameFilter:string="";
  numberFilter:string="";
  jobFilter:string="";
  workingExperienceFilter:string="";

  ManInfListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshManInfList();
  }

  addClick(){
    this.manInf={
      Name:0,
      number:"",
      job:"",
      workingExperience:""
    }
    this.ModalTitle="Enter your contact information";
    this.ActivateAddEditDepComp=true;
    

  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshManInfList();
  }


  refreshManInfList(){
    this.service.getManagerInfo().subscribe(data=>{
      this.ManInfList=data;
      this.ManInfListWithoutFilter=data;
    });
  }

  FilterFn(){
    var NameFilter = this.NameFilter;
    var numberFilter = this.numberFilter;
    var jobFilter = this.jobFilter;
    var workingExperienceFilter= this.workingExperienceFilter;

    this.ManInfList = this.ManInfListWithoutFilter.filter(function (el: { Name: { toString: () => string; }; number: { toString: () => string; }; job: { toString: () => string; }; workingExperience: { toString: () => string; }; }){
        return el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )&&
        el.number.toString().toLowerCase().includes(
          numberFilter.toString().trim().toLowerCase()
        )&&
        el.job.toString().toLowerCase().includes(
          jobFilter.toString().trim().toLowerCase()
        )&&
        el.workingExperience.toString().toLowerCase().includes(
          workingExperienceFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.ManInfList = this.ManInfListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
