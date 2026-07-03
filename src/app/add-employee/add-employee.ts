import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss',
  standalone:true
})

export class AddEmployee {
  constructor(public employeeService:EmployeeService,  private router: Router){}
  name ="";
  Department="";
  Salary=0;

  addEmployee()
  {
    const employee= {
    id: this.employeeService.employees.length + 101,
    name: this.name,
    department: this.Department,
    salary: this.Salary
    };
      this.employeeService.employees.push(employee);
  
  this.name = '';
  this.Department = '';
  this.Salary = 0;
   this.router.navigate(['/employee-list']);
  }

  formsubmitted(){
    alert("Employess is added");
  }
}
