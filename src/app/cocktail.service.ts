import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CocktailService {
search:any =[];
  constructor(private http: HttpClient) { }

  getCocktailsCategory():any{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
  }

  getCocktailsIngredient():any{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
  }

  getCocktailsGlass():any{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
  }

  getCocktailsAlcoholic():any{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");
  }
getCategory(name:any):any{
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + name);
}
getGlass(name:any):any{
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" +name);
}
getAlcoholic(name:any):any{
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" +name);
}

getIngredient(name:any):any{
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +name);
}
getDetail(id:any):any{
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +id);
}
getSearchName(name:any){
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +name);
}
getSearchIngredient(ing:any){
  return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +ing);
}
}
