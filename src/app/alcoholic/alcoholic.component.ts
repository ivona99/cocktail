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


  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktailsAlcoholic()
        .subscribe((data:any) =>{
        this.alcoholics = data.drinks;
        console.log(this.alcoholics);
        })
  }

  onSelect(alcoholic:any){
    //this.router.navigate(['/categories', category.strCategory ]);
     //let strCategory = this.route1.snapshot.paramMap.get('strCategory');
    // this._strCategory = strCategory;
     this.cocktailService.getAlcoholic(alcoholic.strAlcoholic)
     .subscribe((data:any) =>{
       this.newAlcoholics = data.drinks;

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
