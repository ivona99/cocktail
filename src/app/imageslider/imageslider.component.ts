import { CocktailService } from './../cocktail.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  public homeDrinks:any=[];
  public imgArray:any = [];
  myCanvas: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('sliderImages') as HTMLCollectionOf<HTMLElement>;
   l =0;

constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getHome()
        .subscribe((data:any) =>{
          this.homeDrinks=data.drinks;
          for(var i = 0; i<20;i++){
           this.imgArray.push(this.homeDrinks[i].strDrinkThumb);
         }
       console.log(this.imgArray);
        });

     }


rightArrow(){
  this.l++;
  for(var i = 0; i<this.myCanvas.length;i++){
    if (this.l==0) {this.myCanvas[i].style.left = "0px";}
    if (this.l==1) {this.myCanvas[i].style.left = "-1200px";}
    if (this.l==2) {this.myCanvas[i].style.left = "-2400px";}
    if (this.l==3) {this.myCanvas[i].style.left = "-3600px";}
    if (this.l==4) {this.myCanvas[i].style.left = "-4800px";}
    if (this.l==5) {this.myCanvas[i].style.left = "-6000px";}
    if(this.l>5) {this.l=5;}

  }

}

leftArrow(){
  this.l--;
  for(var i = 0; i<this.myCanvas.length;i++){
    if (this.l==0) {this.myCanvas[i].style.left = "0px";}
    if (this.l==1) {this.myCanvas[i].style.left = "-1200px";}
    if (this.l==2) {this.myCanvas[i].style.left = "-2400px";}
    if (this.l==3) {this.myCanvas[i].style.left = "-3600px";}
    if (this.l==4) {this.myCanvas[i].style.left = "-4800px";}
    if (this.l==5) {this.myCanvas[i].style.left = "-6000px";}
    if(this.l<0) {this.l=0;}
  }
}


}
