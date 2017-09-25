import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title: string = 'app';
  drinkList: any[] = [ {
  	'name': 'Fanta', 
  	'price': 11,
  	"url": "assets/fanta.jpg"
  },
  {
   'name': 'Cola', 
   'price': 12,
   "url": "assets/cola.png"
  },
  {
    'name': 'Water', 
    'price': 3,
    "url": "assets/water.jpg"
  } ];
  appStatus: boolean = true;
}