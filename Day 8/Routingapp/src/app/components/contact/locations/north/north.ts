import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-north',
  imports: [NgFor],
  templateUrl: './north.html',
  styleUrl: './north.css'
})
export class North {
  Nlocation=[{city: 'Delhi', call: 9876543210, email: 'delhi@mmc.com'},
  {city: 'Chennai', call: 9123456780, email: 'chennai@mmc.com'},
  {city: 'Kolkata', call: 9988776655, email: 'kolkata@mmc.com'},
  {city: 'Bangalore', call: 9345678901, email: 'bangalore@mmc.com'},
  {city: 'Ahmedabad', call: 9456123789, email: 'ahmedabad@mmc.com'},
  {city: 'Jaipur', call: 9567890123, email: 'jaipur@mmc.com'}
  ]
}
