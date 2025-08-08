import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import { Contact } from './components/contact/contact';
import { About} from './components/about/about';
import { Login } from './components/login/login';
import { News } from './components/news/news';
import { East } from './components/contact/locations/east/east';
import { West } from './components/contact/locations/west/west';
import { North } from './components/contact/locations/north/north';
import { South } from './components/contact/locations/south/south';


export const routes: Routes = [
    { path: '',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'contact',component:Contact,children:[
        {path:'east',component:East},
        {path:'west',component:West},
        {path:'north',component:North},
        {path:'south',component:South}
    ]},
    {path:'about',component:About},
    {path:'login',component:Login},
    {path:'news',component:News}
];
