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




  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }




  constructor() { }

  ngOnInit(): void {
    

  }
onSubmit(id:any){
this.favArray = localStorage.getItem('favorites');
let favorite: any= document.getElementsByClassName("fa fa-heart")[0];
this.data.isSelected=false;
console.log("je li", this.data);

if(this.favArray){
  this.data.isSelected = true;
  this.favArray = JSON.parse(this.favArray);
console.log("blbla", favorite);


  this.isSelected = !this.isSelected;

  let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
  if(elIndex!= -1){
    this.favArray.splice(elIndex, 1);
  }else{
    this.favArray.push(this.data);
    console.log("favorite", favorite);
    
   console.log(this.data);
    console.log(this.favArray);

    // if(this.data.isSelected==true){
    //   favorite["style"].color = "red";
    // }
  }

}
if(!this.favArray){
  this.favArray = [];
}
localStorage.setItem('favorites', JSON.stringify(this.favArray));


}




// changeColor(){

//   if(this.btn.style.color == "grey"){
//     this.btn.style.color = "red";

//     } else{
//       this.btn.style.color = "grey";
//     }
// }
}


