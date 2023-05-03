import { Component } from '@angular/core';
import { HelloWorldService } from './shared/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

hello: string = "";

  constructor(public helloWorldService: HelloWorldService) {
    this.hello = this.helloWorldService.getHelloWorld(); 
  }


}

