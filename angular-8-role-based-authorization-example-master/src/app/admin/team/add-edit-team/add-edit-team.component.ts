import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.less']
})
export class AddEditTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() tea:any;
  idTeam:string="";
  teamName:string="";

  ngOnInit(): void {
    this.idTeam=this.tea.idExpenses;
    this.teamName=this.tea.teamName;
  }

  addTeam(){
    var val={idTeam:this.idTeam,
      teamName:this.teamName};
      this.service.addTeam(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  updateTeam(){
    var val={idTeam:this.idTeam,
      teamName:this.teamName};
      this.service.updateTeam(val).subscribe(res=>{
        alert(res.toString());
      });
  }

}
