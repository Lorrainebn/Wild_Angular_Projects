import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge02_Binding';

  welcome = "Bienvenue sur mon site";

  imgSrc = "https://via.placeholder.com/350x150";

  
  isClicked() {
    console.log("Coucou !")
  }

  
// déclaration d'un objet -> user {} tout simplement //

  user = {
    quote: ""
  }

}
