import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-issue',
  templateUrl: './show-issue.component.html',
  styleUrls: ['./show-issue.component.less']
})
export class ShowIssueComponent implements OnInit {

  constructor(private service:SharedService) { }

  IssuesList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  issue:any;

  idIssueManFilter:string="";
  phoneNumberFilter:string="";
  idIssueManManagementWorkersFilter:string="";


  IssuesListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshIssueList();
  }

  addClick(){
    this.issue={
      idIssueMan:0,
      phoneNumber:"",
      idIssueMan_managementWorkers:""
    }
    this.ModalTitle="Add manager information";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.issue=item;
      this.ModalTitle="Edit manager information";
      this.ActivateAddEditExpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteIssueManW(item.idExpenses).subscribe(data=>{
        alert(data.toString());
        this.refreshIssueList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshIssueList();
  }

  refreshIssueList(){
    this.service.getIssueManW().subscribe(data=>{
        this.IssuesList=data;
        this.IssuesListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idIssueManFilter = this.idIssueManFilter;
    var phoneNumberFilter = this.phoneNumberFilter;
    var idIssueManManagementWorkersFilter = this.idIssueManManagementWorkersFilter;

    this.IssuesList = this.IssuesListWithoutFilter.filter(function (el: { idIssueMan: { toString: () => string; }; phoneNumber: { toString: () => string; }; idIssueMan_managementWorkers: { toString: () => string; }; }){
        return el.idIssueMan.toString().toLowerCase().includes(
          idIssueManFilter.toString().trim().toLowerCase()
        )&&
        el.phoneNumber.toString().toLowerCase().includes(
          phoneNumberFilter.toString().trim().toLowerCase()
        )
        &&
        el.idIssueMan_managementWorkers.toString().toLowerCase().includes(
          idIssueManManagementWorkersFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.IssuesList = this.IssuesListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
