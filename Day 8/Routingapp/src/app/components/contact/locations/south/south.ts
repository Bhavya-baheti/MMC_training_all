import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  imports: [NgFor],
  templateUrl: './south.html',
  styleUrl: './south.css'
})
export class South {
Slocation=[{city: 'Surat', call: 9678901234, email: 'surat@mmc.com'},
  {city: 'Nagpur', call: 9789012345, email: 'nagpur@mmc.com'},
  {city: 'Indore', call: 9890123456, email: 'indore@mmc.com'},
  {city: 'Bhopal', call: 9001234567, email: 'bhopal@mmc.com'},
  {city: 'Lucknow', call: 9112345678, email: 'lucknow@mmc.com'},
  {city: 'Kanpur', call: 9223456789, email: 'kanpur@mmc.com'}
]
}
