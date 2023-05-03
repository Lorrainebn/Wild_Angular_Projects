import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktaillistcomponentComponent } from './cocktaillistcomponent/cocktaillistcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktaillistcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
