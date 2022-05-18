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

  constructor(private cocktailService: CocktailService,
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
    this.cocktailService.getGlass(glass.strGlass)
        .subscribe((data:any)=>{
         this.newGlasses = data.drinks;
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

}
