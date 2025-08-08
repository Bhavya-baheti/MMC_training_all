import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pid } from 'process';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data_in_angular');
  appName="Introduction to data in Angular";
  type_of_data=['Primitive data type', 'Primitive data array', 'Json object', 'Array of json object']
  productDetails = [{pId:101,pName:'Pepsi',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:102,pName:'Coke',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:103,pName:'Coka-cola',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:104,pName:'Vodka',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:105,pName:'Sprite',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:106,pName:'7up',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:107,pName:'Maaza',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:108,pName:'Dew',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:109,pName:'Fanta',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                    {pId:110,pName:'Thums up',pPrice:100,pQty:2,pCategory:'SoftDrink'},
                      ]
}
