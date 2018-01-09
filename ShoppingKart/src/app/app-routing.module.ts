import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {path:'', redirectTo: '/recipes', pathMatch : 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path:'', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipesDetailComponent},        
        {path:':id/edit', component: RecipeEditComponent}
    ]},
    {path:'shoppingList', component: ShoppingListComponent}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}