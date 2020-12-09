import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-exp',
  templateUrl: './add-edit-exp.component.html',
  styleUrls: ['./add-edit-exp.component.less']
})
export class AddEditExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() exp:any;
  idExpenses:string="";
  food:string="";
  equipment:string="";
  rent:string="";
  treatmentCost:string="";
  id_expenses_team:string="";
  id_expenses_seasons:string="";

  TeamList:any=[];
  SeasonList:any=[];

  ngOnInit(): void{
      this.loadTeamList();
      this.loadSeasonList();
  }

  loadTeamList() {
    this.service.getAllTeamNames().subscribe((data:any)=>{
    this.TeamList=data;
    this.idExpenses=this.exp.idExpenses;
    this.food=this.exp.food;
    this.equipment=this.exp.equipment;
    this.rent=this.exp.rent;
    this.treatmentCost=this.exp.treatmentCost;
    this.id_expenses_team=this.exp.id_expenses_team;
    this.id_expenses_seasons=this.exp.id_expenses_seasons;
  });
  }

  loadSeasonList(){
    this.service.getAllSeasonNames().subscribe((data:any)=>{
      this.SeasonList=data;
    });
  }

  addExpenses(){
    var val = {idExpenses:this.idExpenses,
      food:this.food,
      equipment:this.equipment,
      rent:this.rent,
      treatmentCost:this.treatmentCost,
      id_expenses_team:this.id_expenses_team,
      id_expenses_seasons:this.id_expenses_seasons};
    this.service.addExpenses(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateExpenses(){
    var val = {idExpenses:this.idExpenses,
      food:this.food,
      equipment:this.equipment,
      rent:this.rent,
      treatmentCost:this.treatmentCost,
      id_expenses_team:this.id_expenses_team,
      id_expenses_seasons:this.id_expenses_seasons};
    this.service.updateExpenses(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
