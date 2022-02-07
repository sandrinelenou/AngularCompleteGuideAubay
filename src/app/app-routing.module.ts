import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { EvenComponent } from "./even/even.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { HomeServerComponent } from "./home-server/home-server.component";
import { OddComponent } from "./odd/odd.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductEditComponent } from "./products/product-edit/product-edit.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { ServerComponent } from "./server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


export const appRoutes: Routes = [

  { path: 'server', component: ServerComponent},
  { path: 'products', component: ProductListComponent, children: [
   // {path: '', component: ProductStartComponent},
    {path: ':id', component: ProductDetailComponent}
  ]},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'product/new', component: ProductEditComponent},
  { path: 'new', component: ProductEditComponent},

  { path: 'produit/:id/edit', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'cockpit', component: CockpitComponent},
  { path: 'server-element', component: ServerElementComponent},
  { path: 'game-control', component: GameControlComponent},
  { path: 'odd', component: OddComponent},
  { path: 'event', component: EvenComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id/:name', component: UserComponent},
  { path: 'servers', component: ServersComponent},
  { path: 'servers/:id/edit', component: EditServerComponent},
  { path: 'home-server', component: HomeServerComponent},
  //{ path: '', redirectTo: '/servers', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
