import { FavoriteComponent } from './favorite/favorite.component';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { GlassComponent } from './glass/glass.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'categories', component: CategoryComponent},
  {path: 'ingredients', component: IngredientComponent},
  {path: 'glasses', component: GlassComponent},
  {path: 'alcoholics', component: AlcoholicComponent},
  {path: 'favorites', component: FavoriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [CategoryComponent, IngredientComponent, GlassComponent, AlcoholicComponent, FavoriteComponent]
