import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-match',
  templateUrl: './add-edit-match.component.html',
  styleUrls: ['./add-edit-match.component.less']
})
export class AddEditMatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() match:any;
  idMatches:string="";
  matchScore:string="";
  matchType:string="";
  matchDate:string="";
  id_matches_team:string="";
  id_matches_opponents:string="";

  TeamList:any=[];
  OpponentsList:any=[];

  ngOnInit(): void{
      this.loadTeamList();
      this.loadOpponentsList();
  }

  loadTeamList() {
    this.service.getAllTeamNamesMatch().subscribe((data:any)=>{
    this.TeamList=data;
    this.idMatches=this.match.idMatches;
    this.matchScore=this.match.matchScore;
    this.matchType=this.match.matchType;
    this.matchDate=this.match.matchDate;
    this.id_matches_team=this.match.id_matches_team;
    this.id_matches_opponents=this.match.id_matches_opponents;
  });
  }

  loadOpponentsList(){
    this.service.getAllOpponentsNames().subscribe((data:any)=>{
      this.OpponentsList=data;
    });
  }

  addMatches(){
    var val = {idMatches:this.idMatches,
      matchScore:this.matchScore,
      matchType:this.matchType,
      matchDate:this.matchDate,
      id_matches_team:this.id_matches_team,
      id_matches_opponents:this.id_matches_opponents};
    this.service.addMatches(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateMatches(){
    var val = {idMatches:this.idMatches,
      matchScore:this.matchScore,
      matchType:this.matchType,
      matchDate:this.matchDate,
      id_matches_team:this.id_matches_team,
      id_matches_opponents:this.id_matches_opponents};
    this.service.updateMatches(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
