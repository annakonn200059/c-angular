import { Component, OnInit ,Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-issue',
  templateUrl: './add-edit-issue.component.html',
  styleUrls: ['./add-edit-issue.component.less']
})
export class AddEditIssueComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() issue:any;
  idIssueMan:string="";
  phoneNumber:string="";
  idIssueMan_managementWorkers:string="";

  ManagerList:any=[];


  ngOnInit(): void{
      this.loadManagerList();
  }

  loadManagerList() {
    this.service.getAllManagers().subscribe((data:any)=>{
    this.ManagerList=data;
    this.idIssueMan=this.issue.idIssueMan;
    this.phoneNumber=this.issue.phoneNumber;
    this.idIssueMan_managementWorkers=this.issue.idIssueMan_managementWorkers;
  });
  }

  addIssueManW(){
    var val = {idIssueMan:this.idIssueMan,
      phoneNumber:this.phoneNumber,
      idIssueMan_managementWorkers:this.idIssueMan_managementWorkers
      };
    this.service.addIssueManW(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateIssueManW(){
    var val = {idIssueMan:this.idIssueMan,
      phoneNumber:this.phoneNumber,
      idIssueMan_managementWorkers:this.idIssueMan_managementWorkers
      };
    this.service.updateIssueManW(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
