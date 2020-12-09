import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-season',
  templateUrl: './add-edit-season.component.html',
  styleUrls: ['./add-edit-season.component.less']
})
export class AddEditSeasonComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() sea:any;
  idSeasons:string="";
  seasonYear:string="";
 

  
  ngOnInit(): void{
      this.idSeasons=this.sea.idSeasons;
      this.seasonYear=this.sea.seasonYear;
      
  }

  addSeasons(){
    var val = {idSeasons:this.idSeasons,
      seasonYear:this.seasonYear};
    this.service.addSeasons(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateSeasons(){
    var val = {idSeasons:this.idSeasons,
      seasonYear:this.seasonYear};
    this.service.updateSeasons(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
