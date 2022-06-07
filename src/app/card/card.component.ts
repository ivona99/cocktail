import { AppComponent } from './../app.component';
//import {CategoryComponent}from './category/category.component';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Output() countEvent:EventEmitter<any> = new EventEmitter<any>();

  counter = 0;

  @Input() data: any;

  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }

  @Input() showCard?:boolean;
  @Input() isSelected?:boolean;

  favArray:any=[];
  favorite: any= document.getElementsByClassName("fa fa-heart")[0];
  @Output() favoriteEvent:EventEmitter<any> = new EventEmitter<any>();








  constructor() { }


  ngOnInit(): void {

    this.favoriteEvent.emit(this.favorite);

  }
// onSubmit(id:any){
// this.favArray = localStorage.getItem('favorites');
// let favorite: any= document.getElementsByClassName("fa fa-heart")[0];
// this.favoriteEvent.emit(favorite);


// this.data.isSelected=false;
// //console.log("je li", this.data);

// if(this.favArray){
//   this.data.isSelected = true;
//   this.favArray = JSON.parse(this.favArray);
//   this.favoriteEvent.emit(favorite);
// console.log("blbla", favorite);


// //this.isSelected = false;
//  this.isSelected=!this.isSelected;

// console.log("isSelected", this.isSelected);
// console.log("is Selected iz local storage", this.data.isSelected);


//   let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
//   if(elIndex!= -1){
//     this.favArray.splice(elIndex, 1);
//   }else{
//     this.favArray.push(this.data);

//     console.log("favorite", favorite);

//    console.log(this.data);
//     console.log("localStorage niz",this.favArray);
//   }

// }
//  if(!this.favArray){
//    this.favArray = [];
//    }
// localStorage.setItem('favorites', JSON.stringify(this.favArray));
//  //this.isSelected=!this.isSelected;
// // console.log("isSelected", this.isSelected);

// }


onSub(id:any){
  if(localStorage.getItem('favorites')===null){
    console.log("storage is empty");
    this.favArray = [];
    this.favArray.push(this.data);
    this.data.isSelected=true;
    this.isSelected=true;
  }else{
    console.log("storage is not empty");
    this.favArray = localStorage.getItem('favorites');
    this.favArray = JSON.parse(this.favArray);
    let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
    if(elIndex!= -1){
      this.favArray.splice(elIndex, 1);
      this.data.isSelected=false;
      this.isSelected=false;
    }else{
      this.favArray.push(this.data);
      this.data.isSelected=true;
      this.isSelected=true;
      this.counter++;

    }
    if(this.data.isSelected===true){
      this.counter = this.favArray.length;
      console.log("counter u card", this.counter);
      this.countEvent.emit(this.counter);
    }else{
      this.counter = this.favArray.length;
      console.log("counter u card", this.counter);
      this.countEvent.emit(this.counter);
    }
 }
  localStorage.setItem('favorites', JSON.stringify(this.favArray));
}
}


