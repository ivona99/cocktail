import { CocktailService } from './../cocktail.service';
import { Component, OnInit,AfterViewInit} from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showVideo:boolean;
  safeURL:  SafeResourceUrl;;
 // videoUrl = 'https://www.youtube.com/watch?v=OiRVs3FGbkc'
 constructor(private cocktailService: CocktailService,
  private _sanitizer: DomSanitizer) {

  }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollFunction,true);
    window.addEventListener('scroll', this.reveal);
  }

  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OiRVs3FGbkc');
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
 reveal(){
   let reveals = document.querySelectorAll(".horizontal-article, .backgr-video");
   for(var i=0; i<reveals.length;i++){
     let windowheight = window.innerHeight;
     let revealTop = reveals[i].getBoundingClientRect().top;
     let revealpoint = 150;

     if(revealTop < windowheight - revealpoint){
       reveals[i].classList.add('active');
     }
     else{
      reveals[i].classList.remove('active');
     }
   }

 }
 changeVideo(){
   this.showVideo = true;
 }

 onCloseModal(){
   this.showVideo = false;
 }
}



