import { SharedService } from './../shared.service';
import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  public ingredients:any = [];
  public shortIngredients:any = [];
  public newIngredients:any = [];
  public details:any =[];
  showModal?:boolean;
  searchTxt: any = '';
  searchResults:any;
  showCard = true;
  counter:any;
  isSelected?:boolean;
  myCocktails: any;


  constructor(private cocktailService: CocktailService,
    private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("sastojci niz", this.myCocktails);

    this.cocktailService.getCocktailsIngredient()
        .subscribe((data:any) =>{
          this.ingredients = data.drinks;
          for(var i=0; i<10;i++){
            this.shortIngredients.push(this.ingredients[i]);
            console.log(this.shortIngredients);
          }

        })
  }
  onSelect(ingredient:any){
     this.cocktailService.getIngredient(ingredient.strIngredient1)
     .subscribe((data:any) =>{
       this.newIngredients = data.drinks;
       this.newIngredients.forEach(function (element:any) {
        element.isSelected =false;
      });

       console.log(this.newIngredients);

       if(this.showCard ===  false){
        this.searchResults = null;
        this.showCard = true;
        this.newIngredients = data.drinks;
      }
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



    //     this.details.forEach(function(obj:any) {
    //       if (obj.strInstructions === "") {
    //           obj.strInstructions = "There is no content to show!"
    //       }
    //   });
    // console.log(this.details);

         })
  }
onCloseModal(){
  this.details = null;
  this.showModal =false;
}
onSearch(name:any){
  this.cocktailService.getSearchIngredient(this.searchTxt)
     .subscribe((data:any)=>{
       //this.searches = data.drinks;
       //console.log(this.searches);
       console.log("ingredient", data);
       if(data && data.ingredients && this.searchTxt!==''){
         this.searchResults = data.ingredients;
       }
       this.showCard = false;
       //this.showCard = false;
       //console.log(this.searches);
     })
}

favoriteFunction(){
  if(localStorage.getItem('favorites')!==null){
    this.newIngredients.forEach((element:any) => {
      this.myCocktails.forEach((elementO:any) => {
        if(elementO.isSelected == true && elementO.idDrink == element.idDrink){
          element.isSelected=true;

          this.isSelected=element.isSelected;



        }
      });
     });
  }
   //console.log("u kategoriji isSelected", this.isSelected);
  }

parentFunction(data:any){
  console.log("counter je ", data);
  this.counter = data;
  this._sharedService.emitChange(this.counter);
  }
}
