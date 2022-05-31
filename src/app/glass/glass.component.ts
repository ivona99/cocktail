import { SharedService } from './../shared.service';
import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {

  public glasses:any = [];
  public shortGlasses:any=[];
  public newGlasses:any=[];
  public details:any =[];
  showModal?:boolean;
  showCard = true;
  myCocktails: any;
  isSelected?:boolean;
counter:any;

  constructor(private cocktailService: CocktailService,
   private _sharedService: SharedService,
    private router:Router,
    private route1: ActivatedRoute) { }

  ngOnInit(): void {
    this.cocktailService.getCocktailsGlass()
        .subscribe((data:any) =>{
          this.glasses = data.drinks;
          for(var i=0; i<10; i++){
            this.shortGlasses.push(this.glasses[i]);
            console.log(this.shortGlasses);

          }

        })
  }

  onSelect(glass:any){
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("glasses niz", this.myCocktails);
    this.cocktailService.getGlass(glass.strGlass)
        .subscribe((data:any)=>{
         this.newGlasses = data.drinks;
         this.newGlasses.forEach(function (element:any) {
          element.isSelected =false;
        });
         console.log(this.newGlasses);
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

favoriteFunction(){
  if(localStorage.getItem('favorites')!==null){
    this.newGlasses.forEach((element:any) => {
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
