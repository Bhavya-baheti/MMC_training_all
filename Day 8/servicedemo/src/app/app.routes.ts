import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import {Contact} from './components/contact/contact';
import {About} from './components/about/about';

export const routes: Routes = [
    
    { path: '',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'contact',component:Contact},
    {path:'about',component:About}
    ];
