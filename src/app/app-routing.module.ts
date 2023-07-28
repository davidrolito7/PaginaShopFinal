import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MotosComponent } from './motos/motos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { RegistroTablasComponent } from './registro-tablas/registro-tablas.component';
import { ExitComponent } from './sidenav/exit/exit.component';


const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'registrar', component: RegistrarComponent
  },
  { 
    path: 'principal', component: DashboardComponent
  },
  { 
    path: 'motos', component: MotosComponent
  },
  { 
    path: 'usuarios', component: UsuariosComponent
  },
  { 
    path: 'serve', component: EmployeesComponent
  },
  { 
    path: 'registrodatos', component: RegistroTablasComponent
  },
  { 
    path: 'exit', component: ExitComponent
  },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
