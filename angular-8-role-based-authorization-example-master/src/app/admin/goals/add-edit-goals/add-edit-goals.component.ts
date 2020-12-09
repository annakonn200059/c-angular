import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-goals',
  templateUrl: './add-edit-goals.component.html',
  styleUrls: ['./add-edit-goals.component.less']
})
export class AddEditGoalsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() goa:any;
  id_goals_player:string="";
  id_goals_matches:string="";
  goalsNumber:string="";
    
  PlayerList:any=[];
  MatchList:any=[];

  ngOnInit(): void {
    this.loadPlayerList();
    this.loadMatchList();
  }

  loadPlayerList() {
    this.service.getAllPlayers().subscribe((data:any)=>{
    this.PlayerList=data;
    this.id_goals_player=this.goa.id_goals_player;
    this.id_goals_matches=this.goa.id_goals_matches;
    this.goalsNumber=this.goa.goalsNumber;
  });
  }

  loadMatchList(){
    this.service.getAllMatchesNames().subscribe((data:any)=>{
      this.MatchList=data;
    });
  }

  addGoals(){
    var val = {id_goals_player:this.id_goals_player,
      id_goals_matches:this.id_goals_matches,
      goalsNumber:this.goalsNumber};
    this.service.addGoals(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateGoals(){
    var val = {id_goals_player:this.id_goals_player,
      id_goals_matches:this.id_goals_matches,
      goalsNumber:this.goalsNumber};
    this.service.updateGoals(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
