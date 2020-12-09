import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-place',
  templateUrl: './add-edit-place.component.html',
  styleUrls: ['./add-edit-place.component.less']
})
export class AddEditPlaceComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() place:any;
  idPlace:string="";
  roomNumber:string="";

  
  ngOnInit(): void{
      this.idPlace=this.place.idPlace;
      this.roomNumber=this.place.roomNumber;
  }

  addPlace(){
    var val = {idPlace:this.idPlace,
      roomNumber:this.roomNumber
      };
    this.service.addPlace(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updatePlace(){
    var val = {idPlace:this.idPlace,
      roomNumber:this.roomNumber
      };
    this.service.updatePlace(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
