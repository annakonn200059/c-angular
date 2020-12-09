import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-play',
  templateUrl: './show-play.component.html',
  styleUrls: ['./show-play.component.less']
})
export class ShowPlayComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlayersList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  play:any;

  idPlayerFilter:string="";
  playerNumberFilter:string="";
  playerScoreFilter:string="";
  positioFilter:string="";
  idplayerworkerFilter:string="";
  idplayerteamFilter:string="";


  PlayersListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshPlayList();
  }

  addClick(){
    this.play={
      idPlayer:0,
      playerNumber:"",
      playerScore:"",
      position:"",
      id_player_worker:"",
      id_player_team:""
    }
    this.ModalTitle="Add player";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.play=item;
      this.ModalTitle="Edit player";
      this.ActivateAddEditExpComp=true;
  }

  

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshPlayList();
  }

  refreshPlayList(){
    this.service.getPlayer().subscribe(data=>{
        this.PlayersList=data;
        this.PlayersListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idPlayerFilter = this.idPlayerFilter;
    var playerNumberFilter = this.playerNumberFilter;
    var playerScoreFilter = this.playerScoreFilter;
    var positioFilter = this.positioFilter;
    var idplayerworkerFilter = this.idplayerworkerFilter;
    var idplayerteamFilter = this.idplayerteamFilter;


    this.PlayersList = this.PlayersListWithoutFilter.filter(function (el: { idPlayer: { toString: () => string; }; playerNumber: { toString: () => string; }; playerScore: { toString: () => string; }; position: { toString: () => string; }; id_player_worker: { toString: () => string; }; id_player_team: {   toString: () => string;}; }){
        return el.idPlayer.toString().toLowerCase().includes(
          idPlayerFilter.toString().trim().toLowerCase()
        )&&
        el.playerNumber.toString().toLowerCase().includes(
          playerNumberFilter.toString().trim().toLowerCase()
        )
        &&
        el.playerScore.toString().toLowerCase().includes(
          playerScoreFilter.toString().trim().toLowerCase()
        )&&
        el.position.toString().toLowerCase().includes(
          positioFilter.toString().trim().toLowerCase()
        )&&
        el.id_player_worker.toString().toLowerCase().includes(
          idplayerworkerFilter.toString().trim().toLowerCase()
        )&&
        el.id_player_team.toString().toLowerCase().includes(
          idplayerteamFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.PlayersList = this.PlayersListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
