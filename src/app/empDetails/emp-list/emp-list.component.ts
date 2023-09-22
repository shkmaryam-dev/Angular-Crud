import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  employeeArr: any[] = [];
  employee: any = {
    empID: 0,
    empName: '',
    empEmailID: '',
    empdept: '',
    empSalary: '',
    empAdd: '',
  };

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('employeeList');
    if (localData != null) {
      this.employeeArr = JSON.parse(localData);
    }
  }

  onAddEmployee() {
    const empModel = document.getElementById('employeeModel');
    if (empModel != null) {
      empModel.style.display = 'block';
    }
    this.employee = {
      empID: 0,
      empName: '',
      empEmailID: '',
      empdept: '',
      empSalary: '',
      empAdd: '',
    };
  }

  onCloseModel() {
    const empModel = document.getElementById('employeeModel');
    if (empModel != null) {
      empModel.style.display = 'None';
    }
  }

  saveEmployee(data: any) {
    debugger;
    this.employee.empID = this.employeeArr.length + 1;
    this.employeeArr.push(this.employee);
    this.onCloseModel();
    localStorage.setItem('employeeList', JSON.stringify(this.employeeArr));
    this.employee = {
      empID: 0,
      empName: '',
      empEmailID: '',
      empdept: '',
      empSalary: '',
      empAdd: '',
    };
  }

  onEdit(emp: any) {
    debugger;
    this.onAddEmployee();
    this.employee = emp;
  }

  updateEmployee() {
    debugger;
    const record = this.employeeArr.find((e) => e.empID == this.employee.empID);
    record.empName = this.employee.empName;
    record.empEmailID = this.employee.empEmailID;
    record.empdept = this.employee.empdept;
    record.empSalary = this.employee.empSalary;
    record.empAdd = this.employee.empAdd;
    localStorage.setItem('employeeList', JSON.stringify(this.employeeArr));
    this.onCloseModel();
  }

  onDelete(id: number) {
    debugger;
    for (let index = 0; index < this.employeeArr.length; index++) {
      if (this.employeeArr[index].empID == id) {
          this.employeeArr.splice(index,1);
      }
    }
    localStorage.setItem('employeeList', JSON.stringify(this.employeeArr));
  }
}
