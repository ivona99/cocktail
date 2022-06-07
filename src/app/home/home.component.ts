import { CocktailService } from './../cocktail.service';
import { Component, OnInit,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



 constructor(private cocktailService: CocktailService) { }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollFunction,true);
  }

  ngOnInit(): void {}



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

scrollFunction() {
  let myButton = document.getElementById("myBtn") as HTMLCollectionOf<HTMLElement>[0];
 if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
   console.log("button", myButton);
   myButton.style.display = "block";
 }else{
     myButton.style.display = "none";
  }
}


topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }
}



