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

constructor(private cocktailService:CocktailService){}
  toggleSearch() {
    this.showSearch=true;
  }
  noSaerch(){
    this.showSearch=false;
  }

  onSearch(name:any){
    this.cocktailService.getSearchName(name.strDrink)
       .subscribe((data:any)=>{
         this.searches = data.drinks;
         console.log(this.searches);
       })
  }

}
