import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-teamu',
  templateUrl: './show-teamu.component.html',
  styleUrls: ['./show-teamu.component.less']
})

export class ShowTeamuComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeamList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  tea:any;

  //see:boolean=true;
  idTeamFilter:string="";
  teamNameFilter:string="";
 
  PlayersList:any=[];
  TrainersList:any=[];

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
    this.ActivateAddEditDepComp=true;

  }

  GetTrainers(item:any){
    this.service.GetTrainers(item.idTeam).subscribe((data:any)=>{
      this.TrainersList=data;
     
    })}

    
    GetPlayers(item:any){
    this.service.GetPlayers(item.idTeam).subscribe((data:any)=>{
      this.PlayersList=data;
      
    });

    console.log(this.PlayersList)}
  

  editClick(item: any){
    this.tea=item;
    this.ModalTitle="Edit team";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
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
