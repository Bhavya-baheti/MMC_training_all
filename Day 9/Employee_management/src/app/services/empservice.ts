import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Empservice {
  empList = [
    { empNo: 101, empName: 'Alice', empDesignation: 'Developer', empSalary: 60000, empIsPermanent: true },
    { empNo: 102, empName: 'Bob', empDesignation: 'Designer', empSalary: 55000, empIsPermanent: false },
    { empNo: 103, empName: 'Charlie', empDesignation: 'Manager', empSalary: 75000, empIsPermanent: true },
    { empNo: 104, empName: 'Diana', empDesignation: 'QA', empSalary: 50000, empIsPermanent: false },
    { empNo: 105, empName: 'Ethan', empDesignation: 'Support', empSalary: 45000, empIsPermanent: true }
  ];

  
    addEmp(newEmp: any) {
  this.empList.push(newEmp);
  alert('Employee added successfully!');
}

  updateEmp(empNo: number, newName: string, newDesignation: string) {
  const emp = this.empList.find(e => e.empNo === empNo);
  if (emp) {
    emp.empName = newName;
    emp.empDesignation = newDesignation;
  } else {
    alert(`Employee ${empNo} not found.`);
  }
}




  deleteEmp(empNo: number) {
  const index = this.empList.findIndex(emp => emp.empNo === empNo);
  if (index !== -1) {
    this.empList.splice(index, 1);
    alert(`Employee ${empNo} deleted successfully!`);
  } else {
    alert(`Employee ${empNo} not found.`);
  }
}

}
