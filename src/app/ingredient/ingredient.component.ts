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

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
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
    //this.router.navigate(['/categories', category.strCategory ]);
     //let strCategory = this.route1.snapshot.paramMap.get('strCategory');
    // this._strCategory = strCategory;
     this.cocktailService.getIngredient(ingredient.strIngredient1)
     .subscribe((data:any) =>{
       this.newIngredients = data.drinks;

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
}
