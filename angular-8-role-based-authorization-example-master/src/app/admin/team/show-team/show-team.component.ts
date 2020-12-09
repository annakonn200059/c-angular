import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.less']
})
export class ShowTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeamList:any=[];
  ActivateAddEditTeamComp:boolean=false;
  ModalTitle:string="";
  tea:any;

  idTeamFilter:string="";
  teamNameFilter:string="";

  TeamListWithoutFilter:any=[];



  ngOnInit(): void {
    this.refreshTeamList();
  }

  addClick(){
    this.tea={
      idTeam:0,
      teamName:""
    }
    this.ModalTitle="Add team";
    this.ActivateAddEditTeamComp=true;
  }

  editClick(item: any){
    this.tea=item;
    this.ModalTitle="Edit team";
    this.ActivateAddEditTeamComp=true;
  }

  closeClick(){
    this.ActivateAddEditTeamComp=false;
    this.refreshTeamList();
  }

  refreshTeamList(){
    this.service.getTeam().subscribe(data=>{
      this.TeamList=data;
      this.TeamListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idTeamFilter = this.idTeamFilter;
    var teamNameFilter = this.teamNameFilter;
    

    this.TeamList = this.TeamListWithoutFilter.filter(function (el: { idTeam: { toString: () => string; }; teamName: { toString: () => string; }; }){
        return el.idTeam.toString().toLowerCase().includes(
          idTeamFilter.toString().trim().toLowerCase()
        )&&
        el.teamName.toString().toLowerCase().includes(
          teamNameFilter.toString().trim().toLowerCase()
        )
        
    });
  }

  sortResult(prop: string | number,asc: any){
    this.TeamList = this.TeamListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
