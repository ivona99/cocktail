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
  @Input() isSelected?:boolean;
  favorite: any= document.getElementsByClassName("fa fa-heart")[0];
  @Output() favoriteEvent:EventEmitter<any> = new EventEmitter<any>();



  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }




  constructor() { }

  ngOnInit(): void {
    this.favoriteEvent.emit(this.favorite);

  }
onSubmit(id:any){
this.favArray = localStorage.getItem('favorites');
let favorite: any= document.getElementsByClassName("fa fa-heart")[0];
this.favoriteEvent.emit(favorite);


this.data.isSelected=false;
console.log("je li", this.data);

if(this.favArray){
  this.data.isSelected = true;
  this.favArray = JSON.parse(this.favArray);
  this.favoriteEvent.emit(favorite);
console.log("blbla", favorite);


//  this.isSelected = false;
 this.isSelected=!this.isSelected;
 console.log("isSelected", this.isSelected);


  let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
  if(elIndex!= -1){
    this.favArray.splice(elIndex, 1);
  }else{
    this.favArray.push(this.data);

    console.log("favorite", favorite);

   console.log(this.data);
    console.log("localStorage niz",this.favArray);
  }

}
if(!this.favArray){
  this.favArray = [];
}
localStorage.setItem('favorites', JSON.stringify(this.favArray));


}


}


