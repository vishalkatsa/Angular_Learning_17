import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { ChainingParameComponent } from './chaining-parame/chaining-parame.component';
import { PipesComponent } from './pipes/pipes.component';
import { TwowayComponent } from './twoway/twoway.component';

export const routes: Routes = [
    {'path':"",component:LoginComponent},
    {'path':"employe",component:EmployeComponent},
    {'path':"chaining",component:ChainingParameComponent},
    {'path':"pipes",component:PipesComponent},
    {'path':"twoway",component:TwowayComponent},


];
