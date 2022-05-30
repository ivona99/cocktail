import { SharedService } from './../shared.service';
import { CocktailService } from './../cocktail.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  myCocktails: any;
  showCard = true;
  public details:any =[];
  showModal?:boolean;
isSelected = true;
  counter: any;



  constructor(private cocktailService: CocktailService,
    private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("favorites");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("hah", this.myCocktails);



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
