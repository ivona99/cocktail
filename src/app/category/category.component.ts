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
  public _strCategory:any;
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
    private route1: ActivatedRoute) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);

    this.cocktailService.getCocktailsCategory()
        .subscribe((data: any) => {
          this.categories = data.drinks;

          for(var i=0; i<10; i++){
            this.shortCategories.push(this.categories[i]);
          }
          console.log(this.shortCategories);

        })
       
}
  onSelect(category:any){
     this.cocktailService.getCategory(category.strCategory)
     .subscribe((data:any) =>{

       this.newCategories = data.drinks;
      this.newCategories.forEach(function (element:any) {
        element.isSelected =false;
      });

       console.log(this.newCategories);

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
  this.cocktailService.getSearchName(this.searchTxt)
     .subscribe((data:any)=>{
       console.log("category", data);
       if(data && data.drinks && this.searchTxt!==''){
         this.searchResults = data.drinks;
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
