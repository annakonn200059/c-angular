import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-play',
  templateUrl: './add-edit-play.component.html',
  styleUrls: ['./add-edit-play.component.less']
})
export class AddEditPlayComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() play:any;
  idPlayer:string="";
  playerNumber:string="";
  playerScore:string="";
  position:string="";
  id_player_worker:string="";
  id_player_team:string="";

  WorkerList:any=[];
  TeamList:any=[];

  ngOnInit(): void{
    this.loadWorkerList();
      this.loadTeamList();
      
  }

  loadWorkerList() {
    this.service.getAllPlayerNames().subscribe((data:any)=>{
    this.WorkerList=data;
    this.idPlayer=this.play.idPlayer;
    this.playerNumber=this.play.playerNumber;
    this.playerScore=this.play.playerScore;
    this.position=this.play.position;
    this.id_player_worker=this.play.id_player_worker;
    this.id_player_team=this.play.id_player_team;
    
  });
  }

  loadTeamList(){
    this.service.getAllTeamNamesPlayer().subscribe((data:any)=>{
      this.TeamList=data;
    });
  }

  addPlayer(){
    var val = {idPlayer:this.idPlayer,
      playerNumber:this.playerNumber,
      playerScore:this.playerScore,
      position:this.position,
      id_player_worker:this.id_player_worker,
      id_player_team:this.id_player_team};
    this.service.addPlayer(val).subscribe(res=>{
      alert(res.toString());
    });
    console.log(this.WorkerList);
    console.log(this.TeamList);

  }

  updatePlayer(){
    var val = {idPlayer:this.idPlayer,
      playerNumber:this.playerNumber,
      playerScore:this.playerScore,
      position:this.position,
      id_player_worker:this.id_player_worker,
      id_player_team:this.id_player_team};
    this.service.updatePlayer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
