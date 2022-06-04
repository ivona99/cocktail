import { CocktailService } from './../cocktail.service';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
//   randomArray:any = [];
  showCard = true;
  public details:any =[];
  showModal?:boolean;
isSelected = true;
counter: any;
random_index:any;
category_Array:any =[];
selected_card: any;
card_Array:any=[];
random_index_1: any;
selected_card_1: any;

  constructor(private cocktailService: CocktailService,
    private _sharedService: SharedService) { }

  ngOnInit(): void {

    this.cocktailService.getCocktailsCategory()
        .subscribe((data:any)=>{
          this.category_Array = data.drinks;
          console.log("category array", this.category_Array);
          
        });

    
  }

  getRandomCocktail(){
    this.random_index = Math.floor(Math.random()*this.category_Array.length);
    console.log("random index for category", this.random_index);

    this.selected_card = this.category_Array[this.random_index].strCategory;
    console.log("selected card for category array", this.selected_card);

    this.cocktailService.getCategory(this.selected_card)
    .subscribe((data:any)=>{
       this.card_Array = data.drinks;
       console.log("card array", this.card_Array);
       console.log("u servisu", this.selected_card);
       this.random_index_1 = Math.floor(Math.random()*this.card_Array.length);
       console.log("random index for card", this.random_index_1);
   
       this.selected_card_1 = this.card_Array[this.random_index_1];
       console.log("selected card", this.selected_card_1); 
       
    })
    


  }
  onDetail(id:any){
    this.cocktailService.getDetail(id.idDrink)
         .subscribe((data:any)=>{
           this.details = data.drinks;
           console.log(this.details);
           this.showModal=true;
           for(var i=0;i<this.details.length;i++){
            if(this.details[i].strInstructions === ""){
              this.details[i].strInstructions = "There is no content to show!";

            }
          }
         })
  }
  onCloseModal(){
    this.details = null;
    this.showModal =false;
  }

  parentFunction(data:any){
    console.log("counter je ", data);
    this.counter = data;
    this._sharedService.emitChange(this.counter);
  }

}
