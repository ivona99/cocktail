import { ActivatedRoute } from '@angular/router';
import { SharedService } from './shared.service';
import { CocktailService } from './cocktail.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageSrc = 'src/assets/images/cocktail.png' 
  title = 'coctail';
  showSearch?:boolean;
  public searches: any=[];
  myCocktails: any;
  counterFav:any;
  public categories: any =[];
  public shortCategories:any =[];
  public ingredients:any = [];
  public shortIngredients:any = [];
  public glasses:any = [];
  public shortGlasses:any=[];
  public alcoholics:any = [];
  public newAlcoholics:any=[];
  public newCategories:any=[];
  bezveze: any;
 
 


constructor(private cocktailService:CocktailService,
  private _sharedService:SharedService,
  private route: ActivatedRoute,
  private router: Router){}

ngOnInit(): void {
 this.myCocktails = localStorage.getItem("favorites");
  this.myCocktails = JSON.parse(this.myCocktails);
  console.log("hah", this.myCocktails);
  this.counterFav = this.myCocktails.length;
  this._sharedService.changeEmitted$.subscribe(data =>{
    this.counterFav = data;
          console.log(data);
        })
//Navbar dropdown for category
        this.cocktailService.getCocktailsCategory()
        .subscribe((data: any) => {
          this.categories = data.drinks;

          for(var i=0; i<10; i++){
            this.shortCategories.push(this.categories[i]);
          }
          console.log(this.shortCategories);
         })

//Navbar dropdown for Ingredients
        this.cocktailService.getCocktailsIngredient()
        .subscribe((data:any) =>{
          this.ingredients = data.drinks;
          for(var i=0; i<10;i++){
            this.shortIngredients.push(this.ingredients[i]);
            console.log(this.shortIngredients);
          }
        })
//Navbar dropdown for glasses
        this.cocktailService.getCocktailsGlass()
        .subscribe((data:any) =>{
          this.glasses = data.drinks;
          for(var i=0; i<10; i++){
            this.shortGlasses.push(this.glasses[i]);
            console.log(this.shortGlasses);
          }
       })

//Navbar dropdown for alcoholic
this.cocktailService.getCocktailsAlcoholic()
.subscribe((data:any) =>{
this.alcoholics = data.drinks;
console.log(this.alcoholics);
})


    
}



  onSearch(name:any){
    this.cocktailService.getSearchName(name.strDrink)
       .subscribe((data:any)=>{
         this.searches = data.drinks;
         console.log(this.searches);
       })
  }

grandParent(data:any){
  console.log("grandma knows you clicked", data);
}

onSelect(category:any){
  this.router.navigate(['/categories', category.strCategory])

  this.cocktailService.getCategory(category.strCategory)
  .subscribe((data:any) =>{
   this.newCategories = data.drinks;
   this.newCategories.forEach(function (element:any) {
     element.isSelected =false;

   });

    console.log(this.newCategories);

})
}


}
