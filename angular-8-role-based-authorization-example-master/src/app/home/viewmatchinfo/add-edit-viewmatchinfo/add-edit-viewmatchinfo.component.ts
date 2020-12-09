import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-viewmatchinfo',
  templateUrl: './add-edit-viewmatchinfo.component.html',
  styleUrls: ['./add-edit-viewmatchinfo.component.less']
})
export class AddEditViewmatchinfoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() mInf:any;
  matchScore:string="";
  team:string="";
  opponent:string="";

  
  ngOnInit(): void{
      this.matchScore=this.mInf.matchScore;
      this.team=this.mInf.team;
      this.opponent=this.mInf.opponent;
  }

  /*addInjuries(){
    var val = {matchScore:this.matchScore,
      team:this.team,
      opponent:this.opponent};
    this.service.addInjuries(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateInjuries(){
    var val = {matchScore:this.matchScore,
      team:this.team,
      opponent:this.opponent};
    this.service.updateInjuries(val).subscribe(res=>{
      alert(res.toString());
    });*/
  }



