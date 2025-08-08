import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-west',
  imports: [NgFor],
  templateUrl: './west.html',
  styleUrl: './west.css'
})
export class West {
Wlocation=[{city: 'Patna', call: 9334567890, email: 'patna@mmc.com'},
  {city: 'Ranchi', call: 9445678901, email: 'ranchi@mmc.com'},
  {city: 'Chandigarh', call: 9556789012, email: 'chandigarh@mmc.com'},
  {city: 'Coimbatore', call: 9667890123, email: 'coimbatore@mmc.com'},
  {city: 'Visakhapatnam', call: 9778901234, email: 'visakhapatnam@mmc.com'},
  {city: 'Thiruvananthapuram', call: 9889012345, email: 'thiruvananthapuram@mmc.com'}
]
}
