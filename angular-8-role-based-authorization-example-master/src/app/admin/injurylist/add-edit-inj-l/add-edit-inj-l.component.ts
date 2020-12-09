import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-inj-l',
  templateUrl: './add-edit-inj-l.component.html',
  styleUrls: ['./add-edit-inj-l.component.less']
})
export class AddEditInjLComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() injL:any;
  injuries_idInjuries:string="";
  player_idPlayer:string="";
  injuryDate:string="";
  
  InjuryListL:any=[];
  PlayerListL:any=[];

  ngOnInit(): void {
    this.loadInjuryListL();
    this.loadPlayerListL();
  }

  loadInjuryListL() {
    this.service.getAllInjuriesNames().subscribe((data:any)=>{
    this.InjuryListL=data;
    this.injuries_idInjuries=this.injL.injuries_idInjuries;
    this.player_idPlayer=this.injL.player_idPlayer;
    this.injuryDate=this.injL.injuryDate;
  });
  }

  loadPlayerListL(){
    this.service.getAllPlayersID().subscribe((data:any)=>{
      this.PlayerListL=data;
    });
  }

  addInjuryList(){
    var val = {injuries_idInjuries:this.injuries_idInjuries,
      player_idPlayer:this.player_idPlayer,
      injuryDate:this.injuryDate};
    this.service.addInjuryList(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateInjuryList(){
    var val = {injuries_idInjuries:this.injuries_idInjuries,
      player_idPlayer:this.player_idPlayer,
      injuryDate:this.injuryDate};
    this.service.updateInjuryList(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
