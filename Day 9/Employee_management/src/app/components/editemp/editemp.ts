import { Component } from '@angular/core';
import { Empservice } from '../../services/empservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editemp',
  imports:[FormsModule],
  templateUrl: './editemp.html',
  styleUrls: ['./editemp.css']
})
export class Editemp {
  empNo!: number;
  newName!: string;
  newDesignation!: string;

  constructor(private empService: Empservice) {}

  updateEmp() {
    this.empService.updateEmp(this.empNo, this.newName, this.newDesignation);
    alert(`Employee ${this.empNo} updated successfully!`);
    this.empNo = 0;
    this.newName = '';
    this.newDesignation = '';
  }
}


