import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  styleUrls: ['./app.css'],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    
  }
// Sets the current year 
  currentYear = new Date().getFullYear();


}
