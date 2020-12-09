import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-match',
  templateUrl: './show-match.component.html',
  styleUrls: ['./show-match.component.less']
})
export class ShowMatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  MatchList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  match:any;

  idMatchesFilter:string="";
  matchScoreFilter:string="";
  matchTypeFilter:string="";
  matchDateFilter:string="";
  idmatchesteamFilter:string="";
  idmatchesopponentsFilter:string="";

  MatchListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshMatchList();
  }

  addClick(){
    this.match={
      idMatches:0,
      matchScore:"",
      matchType:"",
      matchDate:"",
      id_matches_team:"",
      id_matches_opponents:""
    }
    this.ModalTitle="Add match";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.match=item;
      this.ModalTitle="Edit match";
      this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshMatchList();
  }

  refreshMatchList(){
    this.service.getMatches().subscribe(data=>{
        this.MatchList=data;
        this.MatchListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idMatchesFilter = this.idMatchesFilter;
    var matchScoreFilter = this.matchScoreFilter;
    var matchTypeFilter = this.matchTypeFilter;
    var matchDateFilter = this.matchDateFilter;
    var idmatchesteamFilter = this.idmatchesteamFilter;
    var idmatchesopponentsFilter = this.idmatchesopponentsFilter;

    this.MatchList = this.MatchListWithoutFilter.filter(function (el: { idMatches: { toString: () => string; }; matchScore: { toString: () => string; }; matchType: { toString: () => string; }; matchDate: { toString: () => string; }; id_matches_team: { toString: () => string; }; id_matches_opponents: { toString: () => string; }; }){
        return el.idMatches.toString().toLowerCase().includes(
          idMatchesFilter.toString().trim().toLowerCase()
        )&&
        el.matchScore.toString().toLowerCase().includes(
          matchScoreFilter.toString().trim().toLowerCase()
        )
        &&
        el.matchType.toString().toLowerCase().includes(
          matchTypeFilter.toString().trim().toLowerCase()
        )&&
        el.matchDate.toString().toLowerCase().includes(
          matchDateFilter.toString().trim().toLowerCase()
        )&&
        el.id_matches_team.toString().toLowerCase().includes(
          idmatchesteamFilter.toString().trim().toLowerCase()
        )&&
        el.id_matches_opponents.toString().toLowerCase().includes(
          idmatchesopponentsFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.MatchList = this.MatchListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
