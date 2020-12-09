import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-opp',
  templateUrl: './add-edit-opp.component.html',
  styleUrls: ['./add-edit-opp.component.less']
})
export class AddEditOppComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() opp:any;
  idOpponents:string="";
  oppositeTeamName:string="";
  trainerName:string="";

  
  ngOnInit(): void{
      this.idOpponents=this.opp.idOpponents;
      this.oppositeTeamName=this.opp.oppositeTeamName;
      this.trainerName=this.opp.trainerName;
  }

  addOpponents(){
    var val = {idOpponents:this.idOpponents,
      oppositeTeamName:this.oppositeTeamName,
      trainerName:this.trainerName};
    this.service.addOpponents(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateOpponents(){
    var val = {idOpponents:this.idOpponents,
      oppositeTeamName:this.oppositeTeamName,
      trainerName:this.trainerName};
    this.service.updateOpponents(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
