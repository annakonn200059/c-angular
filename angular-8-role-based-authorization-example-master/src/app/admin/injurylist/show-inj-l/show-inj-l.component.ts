import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-inj-l',
  templateUrl: './show-inj-l.component.html',
  styleUrls: ['./show-inj-l.component.less']
})
export class ShowInjLComponent implements OnInit {

  constructor(private service:SharedService) { }

  InjuryListList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  injL:any;

  injuriesidInjuriesFilter:string="";
  playeridPlayerFilter:string="";
  injuryDateFilter:string="";
 
  InjuryListListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshInjuryListList();
  }

  addClick(){
    this.injL={
     injuries_idInjuries:"",
     player_idPlayer:"",
     injuryDate:0
    }
    this.ModalTitle="Add injury list component";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.injL=item;
      this.ModalTitle="Edit injury list component";
      this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshInjuryListList();
  }

  refreshInjuryListList(){
    this.service.getInjuryList().subscribe(data=>{
        this.InjuryListList=data;
        this.InjuryListListWithoutFilter=data;
    });
  }

  FilterFn(){
    var injuriesidInjuriesFilter = this.injuriesidInjuriesFilter;
    var playeridPlayerFilter = this.playeridPlayerFilter;
    var injuryDateFilter = this.injuryDateFilter;

    this.InjuryListList = this.InjuryListListWithoutFilter.filter(function (el: { injuries_idInjuries: { toString: () => string; }; player_idPlayer: { toString: () => string; }; injuryDate: { toString: () => string; }; }){
        return el.injuries_idInjuries.toString().toLowerCase().includes(
          injuriesidInjuriesFilter.toString().trim().toLowerCase()
        )&&
        el.player_idPlayer.toString().toLowerCase().includes(
          playeridPlayerFilter.toString().trim().toLowerCase()
        )
        &&
        el.injuryDate.toString().toLowerCase().includes(
          injuryDateFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.InjuryListList = this.InjuryListListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
