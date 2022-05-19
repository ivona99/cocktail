import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  category:any;
  @Input() showCard?:boolean;
 favArray: any;



  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }




  constructor() { }

  ngOnInit(): void {
  }
onSubmit(id:any){
//let favoriteArray:any = [];
  //this.favArray.push(this.data);
this.favArray = localStorage.getItem('favorites');
if(this.favArray){
  this.favArray = JSON.parse(this.favArray);

  let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
  if(elIndex!= -1){
    this.favArray.splice(elIndex, 1);
  }else{
    this.favArray.push(this.data);
  }

}
if(!this.favArray){
  this.favArray = [];
}




localStorage.setItem('favorites', JSON.stringify(this.favArray));
    //this.myItem= localStorage.getItem(this.favArray);


}


}
