import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { RegistroTablasComponent } from './registro-tablas/registro-tablas.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgIf, NgFor, AsyncPipe} from '@angular/common';
import { ExitComponent } from './sidenav/exit/exit.component';
import { EditarComponent } from './motos/editar/editar.component';
import { EliminarComponent } from './motos/eliminar/eliminar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    SpinnerComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    MotosComponent,
    UsuariosComponent,
    EmployeesComponent,
    RegistroTablasComponent,
    ExitComponent,
    EditarComponent,
    EliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    DialogComponent,
    RouterModule,
    MatTabsModule,
    NgIf,
    NgFor,
    AsyncPipe
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
