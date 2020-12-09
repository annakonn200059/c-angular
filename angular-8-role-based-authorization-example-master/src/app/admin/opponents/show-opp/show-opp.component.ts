import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-opp',
  templateUrl: './show-opp.component.html',
  styleUrls: ['./show-opp.component.less']
})
export class ShowOppComponent implements OnInit {

  constructor(private service:SharedService) { }

  OpponentsList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  opp:any;

  idOpponentsFilter:string="";
  oppositeTeamNameFilter:string="";
  trainerNameFilter:string="";
  OpponentsListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshOppList();
  }

  addClick(){
    this.opp={
      idOpponents:0,
      oppositeTeamName:"",
      trainerName:""
    }
    this.ModalTitle="Add oppponent";
    this.ActivateAddEditDepComp=true;
    console.log('Hi');

  }

  editClick(item: any){
    this.opp=item;
    this.ModalTitle="Edit opponent";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshOppList();
  }


  refreshOppList(){
    this.service.getOpponents().subscribe(data=>{
      this.OpponentsList=data;
      this.OpponentsListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idOpponentsFilter = this.idOpponentsFilter;
    var oppositeTeamNameFilter = this.oppositeTeamNameFilter;
    var trainerNameFilter = this.trainerNameFilter;

    this.OpponentsList = this.OpponentsListWithoutFilter.filter(function (el: { idOpponents: { toString: () => string; }; oppositeTeamName: { toString: () => string; }; trainerName: { toString: () => string; }; }){
        return el.idOpponents.toString().toLowerCase().includes(
          idOpponentsFilter.toString().trim().toLowerCase()
        )&&
        el.oppositeTeamName.toString().toLowerCase().includes(
          oppositeTeamNameFilter.toString().trim().toLowerCase()
        )&&
        el.trainerName.toString().toLowerCase().includes(
          trainerNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.OpponentsList = this.OpponentsListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
