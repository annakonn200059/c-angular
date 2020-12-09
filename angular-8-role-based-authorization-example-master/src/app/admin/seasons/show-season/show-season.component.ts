import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-season',
  templateUrl: './show-season.component.html',
  styleUrls: ['./show-season.component.less']
})
export class ShowSeasonComponent implements OnInit {

  constructor(private service:SharedService) { }

  SeasonList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  sea:any;

  idSeasonsFilter:string="";
  seasonYearFilter:string="";
  
  SeasonListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshSeaList();
  }

  addClick(){
    this.sea={
      idSeasons:0,
      seasonYear:""
    }
    this.ModalTitle="Add season";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.sea=item;
    this.ModalTitle="Edit season";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshSeaList();
  }


  refreshSeaList(){
    this.service.getSeasons().subscribe(data=>{
      this.SeasonList=data;
      this.SeasonListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idSeasonsFilter = this.idSeasonsFilter;
    var seasonYearFilter = this.seasonYearFilter;

    this.SeasonList = this.SeasonListWithoutFilter.filter(function (el: { idSeasons: { toString: () => string; }; seasonYear: { toString: () => string; }; }){
        return el.idSeasons.toString().toLowerCase().includes(
          idSeasonsFilter.toString().trim().toLowerCase()
        )&&
        el.seasonYear.toString().toLowerCase().includes(
          seasonYearFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.SeasonList = this.SeasonListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
