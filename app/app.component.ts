import { Component } from '@angular/core';

export class Pizza {
  quantity: number;
  name: string;
  ingredients: string;
}

export class Chocolate {
  quantity: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <div class="dropdown">
      <button class="dropbtn">Choose Pizza:</button>
        <div class="dropdown-content">
          <a href="#">Cheese Pizza</a>
          <a href="#">Pepperoni Pizza</a>
          <a href="#">Meat Lover's Pizza</a>
          <a href="#">Supreme Pizza</a>
        </div>
    </div>

    <div>
      <label>Quantity: </label>
      <input [(ngModel)]="pizza.quantity" placeholder="quantity" size="10">
      <p><b>{{pizza.quantity}}</b></p>
    </div>
    <div>
      <label>Extra Pizza ingredients: </label>
      <input [(ngModel)]="pizza.ingredients" placeholder="ingredients" size="30">
      <p><b>{{pizza.ingredients}}</b></p>
    </div>

     <div class="dropdown">
      <button class="dropbtn">Choose Chocolate:</button>
        <div class="dropdown-content">
          <a href="#">Milka</a>
          <a href="#">Mars</a>
          <a href="#">Snickers</a>
          <a href="#">Twix</a>
        </div>
    </div>

    <div>
      <label>Quantity: </label>
      <input [(ngModel)]="pizza.quantity" placeholder="quantity" size="10">
      <p><b>{{pizza.quantity}}</b></p>
    </div>
    `
})

export class AppComponent {
  title = 'Pizza, Chocolate order';
  pizza: Pizza = {
    quantity: 1,
    name: 'Pizza',
    ingredients: 'cheese, salami, paprika etc..',
  };
  chocolate: Chocolate = {
  quantity: 2,
  name: 'Milka',
  };
}
