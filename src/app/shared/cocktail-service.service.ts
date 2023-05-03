import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

cocktailList: Cocktail[] = [
 new Cocktail("Sex On The Beach", 10, "URL"),
 new Cocktail("Mimosa", 13, "URL"),
 new Cocktail("Mojito", 15, "URL")
]  

  constructor() { }
  
public getCocktails(): Cocktail[] {
  return this.cocktailList;


     
  }
}
