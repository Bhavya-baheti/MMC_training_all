import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [NgFor],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  contactList = [{ officeName: 'Powai', contactNo: 8765975256, email: "powai@mmc.com" },
    { officeName: 'Pune', contactNo: 8765975257, email: "pune@mmc.com" },
    { officeName: 'Cyberhub', contactNo: 8765975258, email: "cyberhub@mmc.com" },
    { officeName: 'NewJersey', contactNo: 8765975259, email: "newjersey@mmc.com" },
    { officeName: 'Paris', contactNo: 8765975260, email: "paris@mmc.com" },
    { officeName: 'London', contactNo: 8765975261, email: "london@mmc.com" },
    { officeName: 'Tokyo', contactNo: 8765975262, email: "tokyo@mmc.com" },
    { officeName: 'Singapore', contactNo: 8765975263, email: "singapore@mmc.com" },
    { officeName: 'Dubai', contactNo: 8765975264, email: "dubai@mmc.com" },
    { officeName: 'Sydney', contactNo: 8765975265, email: "sydney@mmc.com" }
]
}
