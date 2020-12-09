import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.less']
})
export class ShowPlaceComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlaceList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  place:any;

  idPlaceFilter:string="";
  roomNumberFilter:string="";
  
  PlaceListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshPlaceList();
  }

  addClick(){
    this.place={
      idPlace:0,
      roomNumber:"",
      
    }
    this.ModalTitle="Add place";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.place=item;
    this.ModalTitle="Edit place";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshPlaceList();
  }


  refreshPlaceList(){
    this.service.getPlace().subscribe(data=>{
      this.PlaceList=data;
      this.PlaceListWithoutFilter=data;
    });
  }

  FilterFn(){
    var idPlaceFilter = this.idPlaceFilter;
    var roomNumberFilter = this.roomNumberFilter;


    this.PlaceList = this.PlaceListWithoutFilter.filter(function (el){
        return el.idPlace.toString().toLowerCase().includes(
          idPlaceFilter.toString().trim().toLowerCase()
        )&&
        el.roomNumber.toString().toLowerCase().includes(
          roomNumberFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.PlaceList = this.PlaceListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
