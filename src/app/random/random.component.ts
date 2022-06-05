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
  showCard = false;
  public details:any =[];
  showModal?:boolean;
isSelected = true;
counter: any;

category_Array:any =[];
random_index:any;
selected_card: any;
card_Array:any=[];
random_index_1: any;
selected_card_1: any;

ingredient_Array:any =[];
ingredient_index: any;
card_Array_1: any =[];
ingredient_card: any;
ingredient_index_1: any;
ingredient_card_1: any;

glass_Array:any=[];
  glass_index: any;
  glass_card: any;
  glass_index_1: any;
  glass_card_1: any;
  
  

  constructor(private cocktailService: CocktailService,
    private _sharedService: SharedService) { }

  ngOnInit(): void {

    this.cocktailService.getCocktailsCategory()
        .subscribe((data:any)=>{
          this.category_Array = data.drinks;
          console.log("category array", this.category_Array);
          
        });
    
    this.cocktailService.getCocktailsIngredient()
        .subscribe((data:any)=>{
          this.ingredient_Array = data.drinks;
          console.log("Ingredients array", this.ingredient_Array);
          
        });
  this.cocktailService.getCocktailsGlass()
      .subscribe((data:any)=>{
        this.glass_Array = data.drinks;
        console.log("glass array", this.glass_Array);
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
       
    });

    this.ingredient_index = Math.floor(Math.random()*this.ingredient_Array.length);
    console.log("random index for ingredient", this.ingredient_index);

    this.ingredient_card = this.ingredient_Array[this.ingredient_index].strIngredient1;
    console.log("selected card for ingredient array", this.ingredient_card);

    this.cocktailService.getIngredient(this.ingredient_card)
        .subscribe((data:any)=>{
          this.card_Array_1 = data.drinks;

          this.ingredient_index_1 = Math.floor(Math.random()*this.card_Array_1.length);
          console.log("random index in ingredient for card", this.ingredient_index_1);

          this.ingredient_card_1 = this.card_Array_1[this.ingredient_index_1];
          console.log("selected card in ingredient", this.ingredient_card_1);
         });

    this.glass_index = Math.floor(Math.random()*this.glass_Array.length);
    console.log("random index for ingredient", this.glass_index);
     
    this.glass_card = this.glass_Array[this.glass_index].strGlass;
    console.log("selected card for ingredient array", this.glass_card);

    this.cocktailService.getGlass(this.glass_card)
        .subscribe((data:any)=>{
          this.card_Array = data.drinks;

          this.glass_index_1 = Math.floor(Math.random()*this.card_Array.length);
          console.log("random index in glass for card", this.glass_index_1);

          this.glass_card_1 = this.card_Array[this.glass_index_1];
          console.log("selected card in glass", this.glass_card_1);

        });

   if(this.card_Array){
     this.showCard = true;
   }   
    


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
