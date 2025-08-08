import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Greetings {
  cartValue=0;
  developerName = 'Bhavya Baheti';
  greetings()
  {
    alert('Hello and welcome to out store ' + this.developerName)
  }
  addTocart()
  {
    this.cartValue = this.cartValue+1;
  }
  
}
