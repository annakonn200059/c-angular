import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'
import {ShowTeamuComponent} from 'src/app/home/teamu/show-teamu/show-teamu.component'

@Component({
  selector: 'app-add-edit-teamu',
  templateUrl: './add-edit-teamu.component.html',
  styleUrls: ['./add-edit-teamu.component.less']
})
export class AddEditTeamuComponent implements OnInit {

  constructor(private service:SharedService) { }

  tea:any;
  idTeam:string="";
  teamName:string="";

  PlayersList:any=[];
  TrainersList:any=[];

  ngOnInit(): void{
    //this.PlayersList=this.tea.PlayersList;
    //this.TrainersList=this.tea.TrainersList;
  }
  
  


  

  
}
