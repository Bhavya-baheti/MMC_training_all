import { Component } from '@angular/core';
import { Empservice } from '../../services/empservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  imports:[FormsModule],
  templateUrl: './addemp.html',
  styleUrls: ['./addemp.css']
})
export class AddempComponent {
  empNo!: number;
  empName!: string;
  empDesignation!: string;
  empSalary!: number;
  empIsPermanent: boolean = false;

  constructor(private empService: Empservice) {}

  addEmp() {
    const newEmp = {
      empNo: this.empNo,
      empName: this.empName,
      empDesignation: this.empDesignation,
      empSalary: this.empSalary,
      empIsPermanent: this.empIsPermanent
    };
    this.empService.addEmp(newEmp);
   
    this.empNo = 0;
    this.empName = '';
    this.empDesignation = '';
    this.empSalary = 0;
    this.empIsPermanent = false;
  }
}
