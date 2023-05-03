import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../shared/cocktail-service.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktaillistcomponent',
  templateUrl: './cocktaillistcomponent.component.html',
  styleUrls: ['./cocktaillistcomponent.component.scss']
})
export class CocktaillistcomponentComponent implements OnInit {

cocktails: Cocktail[] = []; 

constructor(public cocktailService: CocktailServiceService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  } 


}
