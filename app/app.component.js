"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Pizza = (function () {
    function Pizza() {
    }
    return Pizza;
}());
exports.Pizza = Pizza;
var Chocolate = (function () {
    function Chocolate() {
    }
    return Chocolate;
}());
exports.Chocolate = Chocolate;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Pizza, Chocolate order';
        this.pizza = {
            quantity: 1,
            name: 'Pizza',
            ingredients: 'cheese, salami, paprika etc..',
        };
        this.chocolate = {
            quantity: 2,
            name: 'Milka',
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    \n    <div class=\"dropdown\">\n      <button class=\"dropbtn\">Choose Pizza:</button>\n        <div class=\"dropdown-content\">\n          <a href=\"#\">Cheese Pizza</a>\n          <a href=\"#\">Pepperoni Pizza</a>\n          <a href=\"#\">Meat Lover's Pizza</a>\n          <a href=\"#\">Supreme Pizza</a>\n        </div>\n    </div>\n\n    <div>\n      <label>Quantity: </label>\n      <input [(ngModel)]=\"pizza.quantity\" placeholder=\"quantity\" size=\"10\">\n      <p><b>{{pizza.quantity}}</b></p>\n    </div>\n    <div>\n      <label>Extra Pizza ingredients: </label>\n      <input [(ngModel)]=\"pizza.ingredients\" placeholder=\"ingredients\" size=\"30\">\n      <p><b>{{pizza.ingredients}}</b></p>\n    </div>\n\n     <div class=\"dropdown\">\n      <button class=\"dropbtn\">Choose Chocolate:</button>\n        <div class=\"dropdown-content\">\n          <a href=\"#\">Milka</a>\n          <a href=\"#\">Mars</a>\n          <a href=\"#\">Snickers</a>\n          <a href=\"#\">Twix</a>\n        </div>\n    </div>\n\n    <div>\n      <label>Quantity: </label>\n      <input [(ngModel)]=\"pizza.quantity\" placeholder=\"quantity\" size=\"10\">\n      <p><b>{{pizza.quantity}}</b></p>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map