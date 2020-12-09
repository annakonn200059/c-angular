import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-exp-u',
  templateUrl: './show-exp-u.component.html',
  styleUrls: ['./show-exp-u.component.less']
})
export class ShowExpUComponent implements OnInit {

  constructor(private service:SharedService) { }

  ExpensesList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  exp:any;

  idExpensesFilter:string="";
  foodFilter:string="";
  equipmentFilter:string="";
  rentFilter:string="";
  treatmentCostFilter:string="";
  idexpensesteamFilter:string="";
  idexpensesseasonsFilter:string="";

  ExpensesListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshExpList();
  }

  addClick(){
    this.exp={
      idExpenses:0,
      food:"",
      equipment:"",
      rent:"",
      treatmentCost:"",
      id_expenses_team:"",
      id_expenses_seasons:""
    }
    this.ModalTitle="Add Expenses";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.exp=item;
      this.ModalTitle="Edit Expenses";
      this.ActivateAddEditExpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteExpenses(item.idExpenses).subscribe(data=>{
        alert(data.toString());
        this.refreshExpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshExpList();
  }

  refreshExpList(){
    this.service.getExpensesList().subscribe(data=>{
        this.ExpensesList=data;
        this.ExpensesListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idExpensesFilter = this.idExpensesFilter;
    var foodFilter = this.foodFilter;
    var equipmentFilter = this.equipmentFilter;
    var rentFilter = this.rentFilter;
    var treatmentCostFilter = this.treatmentCostFilter;
    var idexpensesteamFilter = this.idexpensesteamFilter;
    var idexpensesseasonsFilter = this.idexpensesseasonsFilter;

    this.ExpensesList = this.ExpensesListWithoutFilter.filter(function (el: { idExpenses: { toString: () => string; }; food: { toString: () => string; }; equipment: { toString: () => string; }; rent: { toString: () => string; }; treatmentCost: { toString: () => string; }; id_expenses_team: { toString: () => string; }; id_expenses_seasons: { toString: () => string; }; }){
        return el.idExpenses.toString().toLowerCase().includes(
          idExpensesFilter.toString().trim().toLowerCase()
        )&&
        el.food.toString().toLowerCase().includes(
          foodFilter.toString().trim().toLowerCase()
        )
        &&
        el.equipment.toString().toLowerCase().includes(
          equipmentFilter.toString().trim().toLowerCase()
        )&&
        el.rent.toString().toLowerCase().includes(
          rentFilter.toString().trim().toLowerCase()
        )&&
        el.treatmentCost.toString().toLowerCase().includes(
          treatmentCostFilter.toString().trim().toLowerCase()
        )&&
        el.id_expenses_team.toString().toLowerCase().includes(
          idexpensesteamFilter.toString().trim().toLowerCase()
        )&&
        el.id_expenses_seasons.toString().toLowerCase().includes(
          idexpensesseasonsFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.ExpensesList = this.ExpensesListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
