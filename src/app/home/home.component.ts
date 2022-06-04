import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  autoSlide = true;
 
 constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
   
  }



openSocialNetwork(network:string){
  switch (network) {
    case 'facebook':
      window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
       break;
case 'twitter':
window.open(`https://twitter.com/intent/tweet/?text=${window.location.href}`, '_blank');
break;
    default:
      break;
  }
}



}



