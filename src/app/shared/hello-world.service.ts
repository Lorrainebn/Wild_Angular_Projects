import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HelloWorldService {

  constructor() { }


  public getHelloWorld(): string {
    return "Hello world";
  }
  
}
