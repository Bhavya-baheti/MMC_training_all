import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-east',
  imports: [NgFor],
  templateUrl: './east.html',
  styleUrl: './east.css'
})
export class East {
  Elocation =[{city:'Mumbai',call: 8769574563, email:'mumbai@mmc.com'},
          {city:'pune',call: 9765574563, email:'pune@mmc.com'},
          {city:'hyderbad',call: 8856474563, email:'hyderbad@mmc.com'},
          {city:'goa',call: 8574874563, email:'goa@mmc.com'},
          {city:'nashik',call: 1139474563, email:'nashik@mmc.com'},
          {city:'powai',call: 8563437485, email:'powai@mmc.com'}

  ]

}
