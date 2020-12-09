import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-viewmatchinfo',
  templateUrl: './show-viewmatchinfo.component.html',
  styleUrls: ['./show-viewmatchinfo.component.less']
})
export class ShowViewmatchinfoComponent implements OnInit {

  constructor(private service:SharedService) { }

  MatchInfoList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  mInf:any;

  matchScoreFilter:string="";
  teamFilter:string="";
  opponentFilter:string="";
  MatchInfoListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshMInfList();
  }

  addClick(){
    this.mInf={
      matchScore:0,
      team:"",
      opponent:""
    }
    this.ModalTitle="Add injury";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.mInf=item;
    this.ModalTitle="Edit injury";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshMInfList();
  }


  refreshMInfList(){
    this.service.getMatchInfo().subscribe(data=>{
      this.MatchInfoList=data;
      this.MatchInfoListWithoutFilter=data;
    });
  }

  FilterFn(){
    var matchScoreFilter = this.matchScoreFilter;
    var teamFilter = this.teamFilter;
    var opponentFilter = this.opponentFilter;

    this.MatchInfoList = this.MatchInfoListWithoutFilter.filter(function (el: { matchScore: { toString: () => string; }; team: { toString: () => string; }; opponent: { toString: () => string; }; }){
        return el.matchScore.toString().toLowerCase().includes(
          matchScoreFilter.toString().trim().toLowerCase()
        )&&
        el.team.toString().toLowerCase().includes(
          teamFilter.toString().trim().toLowerCase()
        )&&
        el.opponent.toString().toLowerCase().includes(
          opponentFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.MatchInfoList = this.MatchInfoListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
