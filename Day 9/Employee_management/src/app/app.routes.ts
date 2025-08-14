import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EmplistComponent } from './components/emplist/emplist';
import { AddempComponent } from './components/addemp/addemp';
import { Editemp } from './components/editemp/editemp';
import { DeleteempComponent } from './components/deleteemp/deleteemp';
import { Empculture } from './components/empculture/empculture';
import { Currentopenings } from './components/currentopenings/currentopenings';

export const routes: Routes = [
{ path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: Home },
  { path: 'emplist', component: EmplistComponent },
  { path: 'addemp', component: AddempComponent },
  { path: 'editemp', component: Editemp },
  { path: 'deleteemp', component: DeleteempComponent },
  { path: 'empculture', component: Empculture },
  { path: 'currentopenings', component: Currentopenings },
];
