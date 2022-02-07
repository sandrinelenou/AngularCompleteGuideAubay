//import $  jquery;
//import 'bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeServerComponent } from './home-server/home-server.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';







/*export const ROUTES: Routes = [
  { path: 'server', component: ServerComponent},
  { path: 'recipes', component: RecipesComponent},
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
];*/

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NewAccountComponent,
    AccountComponent,
    UserComponent,
    UsersComponent,
    ServersComponent,
    EditServerComponent,
    HomeServerComponent,
    RecipeStartComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductsComponent,
    ProductEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(ROUTES),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
