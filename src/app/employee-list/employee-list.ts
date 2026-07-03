import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList {

  constructor(public employeeService: EmployeeService) {}

  editEmployee(employee: any) {
    alert("Editing: " + employee.name);
  }

  deleteEmployee(id: number) {
    this.employeeService.employees =
      this.employeeService.employees.filter(emp => emp.id !== id);
      alert("Id number "+id +" Employee is deleted ");
  }
}