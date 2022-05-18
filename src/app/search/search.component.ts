import { CocktailService } from './../cocktail.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searches:any=[];
enteredSearchValue: any='';
@Output()
  searchTextChanged: EventEmitter<any> = new EventEmitter<any>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}
  constructor(private cocktailService:CocktailService) { }

  ngOnInit(): void {
  }

  // onSearch(name:any){
  //   this.cocktailService.getSearchName(name.enteredSearchValue)
  //      .subscribe((data:any)=>{
  //        this.searches = data.drinks;
  //        console.log(this.searches);
  //      })
  // }

  // onSearch(name:any){
  //   this.cocktailService.getSearchName(this.searchTxt)
  //      .subscribe((data:any)=>{
  //        //this.searches = data.drinks;
  //        //console.log(this.searches);
  //        console.log("category", data);
  //        if(data && data.drinks && this.searchTxt!==''){
  //          this.searchResults = data.drinks;
  //        }
  //        this.showCard = false;

  //      })
  // }
}
