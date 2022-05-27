import { CocktailService } from './cocktail.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coctail';
  showSearch?:boolean;
  public searches: any=[];
  myCocktails: any;
  count:any;


constructor(private cocktailService:CocktailService){

}


  onSearch(name:any){
    this.cocktailService.getSearchName(name.strDrink)
       .subscribe((data:any)=>{
         this.searches = data.drinks;
         console.log(this.searches);
       })
  }
  // grandmaHandleClick(event:any){

  // }
  onCount(count:any){
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("hah", this.myCocktails);
    this.count = this.myCocktails.length;

console.log("niz iz localstorage iz app", this.myCocktails);

console.log("count je ", count);


  }

}
