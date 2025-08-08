import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings-pipe';
import { GendergreetingPipe } from './pipes/gendergreeting-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, UpperCasePipe, LowerCasePipe, CurrencyPipe, JsonPipe, DatePipe, GreetingsPipe,GendergreetingPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes_demo');
  firstName = 'Bhavya';
  lastName = 'Baheti';
  salary = 1000;
  product = { pId: 101, pName: 'Laptop', price: 5000, pIsInStock: true };
  orderData = new Date();
  employeeList = [{ empNo: 101, empName: 'Bhavya', empDes: 'Manager', empGender: 'Female', empSal: 40000, empIspermanent: 'true' },
  { empNo: 102, empName: 'Aarav', empDes: 'Developer', empGender: 'Male', empSal: 35000, empIspermanent: 'true' },
  { empNo: 103, empName: 'Isha', empDes: 'Designer', empGender: 'Female', empSal: 32000, empIspermanent: 'false' },
  { empNo: 104, empName: 'Rohan', empDes: 'Tester', empGender: 'Male', empSal: 30000, empIspermanent: 'true' },
  { empNo: 105, empName: 'Meera', empDes: 'HR Executive', empGender: 'Female', empSal: 28000, empIspermanent: 'false' },
  { empNo: 106, empName: 'Kunal', empDes: 'Team Lead', empGender: 'Male', empSal: 45000, empIspermanent: 'true' },
  { empNo: 107, empName: 'Sneha', empDes: 'Business Analyst', empGender: 'Female', empSal: 37000, empIspermanent: 'true' },
  { empNo: 108, empName: 'Yash', empDes: 'Support Engineer', empGender: 'Male', empSal: 31000, empIspermanent: 'false' },
  { empNo: 109, empName: 'Tanya', empDes: 'Content Writer', empGender: 'Female', empSal: 29000, empIspermanent: 'false' },
  { empNo: 110, empName: 'Aditya', empDes: 'Product Manager', empGender: 'Male', empSal: 50000, empIspermanent: 'true' }
  ]
}
