
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
      employees = [
    { id: 101, name: 'Rahul', department: 'IT', salary: 50000 },
    { id: 102, name: 'Priya', department: 'HR', salary: 45000 },
    { id: 103, name: 'John', department: 'Finance', salary: 60000 },
    {id: 104, name: 'Darshan', department: 'IT', salary: 60000}
  ];

}