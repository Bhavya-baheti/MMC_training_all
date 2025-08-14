import { Component, OnInit } from '@angular/core';
import { Empservice } from '../../services/empservice';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-emplist',
  imports: [NgFor],
  templateUrl: './emplist.html',
  styleUrls: ['./emplist.css']
})
export class EmplistComponent implements OnInit {
  employees: any[] = [];

  constructor(private empService: Empservice) {}

  ngOnInit(): void {
    this.employees = this.empService.empList;
  }
}
