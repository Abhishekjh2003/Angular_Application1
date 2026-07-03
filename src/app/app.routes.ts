import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';
import { Login } from './login/login';
import { dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: dashboard
  },
  {
    path: 'employees',
    component: EmployeeList
  },
  {
    path: 'add-employee',
    component: AddEmployee
  },
  {
    path: 'login',
    component: Login
  }
];