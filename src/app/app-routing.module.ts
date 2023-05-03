import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktaillistcomponentComponent } from './cocktaillistcomponent/cocktaillistcomponent.component';

const routes: Routes = [
  {path:'', component: CocktaillistcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
