import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-inj',
  templateUrl: './show-inj.component.html',
  styleUrls: ['./show-inj.component.less']
})
export class ShowInjComponent implements OnInit {

  constructor(private service:SharedService) { }

  InjuryList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  inj:any;

  idInjuriesFilter:string="";
  diagnosisFilter:string="";
  treatmentFilter:string="";
  InjuryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshInjList();
  }

  addClick(){
    this.inj={
      idInjuries:0,
      diagnosis:"",
      treatment:""
    }
    this.ModalTitle="Add injury";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.inj=item;
    this.ModalTitle="Edit injury";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshInjList();
  }


  refreshInjList(){
    this.service.getInjuriesList().subscribe(data=>{
      this.InjuryList=data;
      this.InjuryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idInjuriesFilter = this.idInjuriesFilter;
    var diagnosisFilter = this.diagnosisFilter;
    var treatmentFilter = this.treatmentFilter;

    this.InjuryList = this.InjuryListWithoutFilter.filter(function (el: { idInjuries: { toString: () => string; }; diagnosis: { toString: () => string; }; treatment: { toString: () => string; }; }){
        return el.idInjuries.toString().toLowerCase().includes(
          idInjuriesFilter.toString().trim().toLowerCase()
        )&&
        el.diagnosis.toString().toLowerCase().includes(
          diagnosisFilter.toString().trim().toLowerCase()
        )&&
        el.treatment.toString().toLowerCase().includes(
          treatmentFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.InjuryList = this.InjuryListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
