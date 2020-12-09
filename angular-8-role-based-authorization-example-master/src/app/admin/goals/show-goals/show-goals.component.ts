import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-goals',
  templateUrl: './show-goals.component.html',
  styleUrls: ['./show-goals.component.less']
})
export class ShowGoalsComponent implements OnInit {

  constructor(private service:SharedService) { }

  GoalsList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  goa:any;

  idgoalsplayerFilter:string="";
  idgoalsmatchesFilter:string="";
  goalsNumberFilter:string="";
 
  GoalsListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshGoalsList();
  }

  addClick(){
    this.goa={
     id_goals_player:"",
     id_goals_matches:"",
     goalsNumber:0
    }
    this.ModalTitle="Add Goals";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.goa=item;
      this.ModalTitle="Edit Goals";
      this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshGoalsList();
  }

  refreshGoalsList(){
    this.service.getGoalsList().subscribe(data=>{
        this.GoalsList=data;
        this.GoalsListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idgoalsplayerFilter = this.idgoalsplayerFilter;
    var idgoalsmatchesFilter = this.idgoalsmatchesFilter;
    var goalsNumberFilter = this.goalsNumberFilter;

    this.GoalsList = this.GoalsListWithoutFilter.filter(function (el: { id_goals_player: { toString: () => string; }; id_goals_matches: { toString: () => string; }; goalsNumber: { toString: () => string; }; }){
        return el.id_goals_player.toString().toLowerCase().includes(
          idgoalsplayerFilter.toString().trim().toLowerCase()
        )&&
        el.id_goals_matches.toString().toLowerCase().includes(
          idgoalsmatchesFilter.toString().trim().toLowerCase()
        )
        &&
        el.goalsNumber.toString().toLowerCase().includes(
          goalsNumberFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.GoalsList = this.GoalsListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
