import { SharedService } from './../shared.service';
import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcoholic',
  templateUrl: './alcoholic.component.html',
  styleUrls: ['./alcoholic.component.css']
})
export class AlcoholicComponent implements OnInit {
  public alcoholics:any = [];
  public newAlcoholics:any=[];
  public details:any =[];
  showModal?:boolean;
  showCard = true;
  myCocktails: any;
  isSelected?:boolean;
counter:any;


  constructor(private cocktailService: CocktailService,
    private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("alkohol niz", this.myCocktails);
    this.cocktailService.getCocktailsAlcoholic()
        .subscribe((data:any) =>{
        this.alcoholics = data.drinks;
        console.log(this.alcoholics);
        })
  }

  onSelect(alcoholic:any){
     this.cocktailService.getAlcoholic(alcoholic.strAlcoholic)
     .subscribe((data:any) =>{
       this.newAlcoholics = data.drinks;
       this.newAlcoholics.forEach(function (element:any) {
        element.isSelected =false;
      });

       console.log(this.newAlcoholics);
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

favoriteFunction(){
  if(localStorage.getItem('favorites')!==null){
    this.newAlcoholics.forEach((element:any) => {
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
