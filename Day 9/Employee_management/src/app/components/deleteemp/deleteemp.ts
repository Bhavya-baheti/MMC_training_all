import { Component } from '@angular/core';
import { Empservice } from '../../services/empservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteemp',
  imports:[FormsModule],
  templateUrl: './deleteemp.html',
  styleUrls: ['./deleteemp.css']
})
export class DeleteempComponent {
  empNoToDelete!: number;

  constructor(private empService: Empservice) {}

  deleteEmp() {
    this.empService.deleteEmp(this.empNoToDelete);
    this.empNoToDelete = 0; // Optional: reset the input
  }
}
