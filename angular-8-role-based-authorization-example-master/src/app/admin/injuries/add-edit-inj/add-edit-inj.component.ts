import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-inj',
  templateUrl: './add-edit-inj.component.html',
  styleUrls: ['./add-edit-inj.component.less']
})
export class AddEditInjComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() inj:any;
  idInjuries:string="";
  diagnosis:string="";
  treatment:string="";

  
  ngOnInit(): void{
      this.idInjuries=this.inj.idInjuries;
      this.diagnosis=this.inj.diagnosis;
      this.treatment=this.inj.treatment;
  }

  addInjuries(){
    var val = {idInjuries:this.idInjuries,
      diagnosis:this.diagnosis,
      treatment:this.treatment};
    this.service.addInjuries(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateInjuries(){
    var val = {idInjuries:this.idInjuries,
      diagnosis:this.diagnosis,
      treatment:this.treatment};
    this.service.updateInjuries(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
