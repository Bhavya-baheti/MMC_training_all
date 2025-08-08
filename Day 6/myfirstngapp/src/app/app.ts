import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstngapp');
  Firstname = 'Bhavya';
  Lastname= 'Baheti';
  Age = 23;
  Gender = 'Female';
  Email = 'bhavya.baheti@mmc.com';
  Hobbies = ['Basketball','frisbee','reading','wandering']
  greetuser(){
    alert('Welcome to angular');
  }
  addHobby(hobby: string){
    this.Hobbies.push(hobby);
  }
}

