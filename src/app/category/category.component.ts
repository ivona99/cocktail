import { SharedService } from './../shared.service';
import { CocktailService } from './../cocktail.service';
import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories: any =[];
  public shortCategories:any =[];
  public newCategories:any=[];
  public details:any =[];
  showModal?:boolean;
  searchTxt: any = '';
  searchResults:any;
  showCard = true;
  myCocktails: any;
  isSelected?:boolean;
  counter:any;

  constructor(
    private cocktailService: CocktailService,
    private _sharedService: SharedService,
    private router:Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);

    this.cocktailService.getCocktailsCategory()
        .subscribe((data: any) => {
          this.categories = data.drinks;
          console.log("categories", this.categories);


          for(var i=0; i<10; i++){
            this.shortCategories.push(this.categories[i]);
          }
          console.log("shortCategories",this.shortCategories);

        })
        // this.route.paramMap
        // .subscribe(params =>{
        //   // let name = params.get('category');
        //   console.log("name of category in route", params);

        // });


}
  onSelect(category:any){
    this.router.navigate(['/categories', category.strCategory])
     this.cocktailService.getCategory(category.strCategory)
     .subscribe((data:any) =>{
      this.newCategories = data.drinks;
      this.newCategories.forEach(function (element:any) {
      element.isSelected =false;
    });

       console.log("newCategories",this.newCategories);

      if(this.showCard ===  false){
        this.searchResults = null;
        this.showCard = true;
        this.newCategories = data.drinks;
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
       })
  }

onCloseModal(){
  this.details = null;
  this.showModal =false;
}
onSearch(name:any){
  this.cocktailService.getSearchName(this.searchTxt)
     .subscribe((data:any)=>{
       console.log("category", data);
       if(data && data.drinks && this.searchTxt!==''){
         this.searchResults = data.drinks;
         console.log("search" ,this.searchResults);
         
       }
       this.showCard = false;

     })
}

favoriteFunction(){
  if(localStorage.getItem('favorites')!==null){
    this.newCategories.forEach((element:any) => {
      this.myCocktails.forEach((elementO:any) => {
        if(elementO.isSelected == true && elementO.idDrink == element.idDrink){
          element.isSelected=true;
          this.isSelected=element.isSelected;
        }
      });
     });
  }
}

  parentFunction(data:any){
    console.log("counter je ", data);
    this.counter = data;
    this._sharedService.emitChange(this.counter);
    }

}
