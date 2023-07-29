import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DataService } from 'src/app/service/data.service';
import {MatDialog} from '@angular/material/dialog';
import { RegistroTablasComponent } from 'src/app/registro-tablas/registro-tablas.component';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  correo: string = '';
  isLoading = false;
  password: string = '';
  confirmPassword: string = '';

  usunombre: string='';
  usuapellido: string='';
  usucorreo: string='';
  usupass: string='';
  usutel: string='';

  constructor(private route: Router, public dialog: MatDialog,private servicio:DataService) { }

  ngOnInit(): void {

  }

  submitForm(form: NgForm) {
    if (form.invalid) {
      this.openDialog('0ms', '0ms');
      return;

    }
    console.log('Formulario válido. Datos enviados:', form.value);
    this.ValidarContraseña();
  }

  navigation(){
    if (!this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.route.navigate(['/principal']);
      }, 2000);
    }

  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  openPasswordMismatchDialog() {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'Las contraseñas no coinciden. Por favor, inténtalo nuevamente.' }
    });
  }
  ValidarContraseña() {
    if (this.password !== this.confirmPassword) {
      
      this.navigation();
    }
  }

  onUsuarios() {
    const formData = {
      Nombre: this.usunombre,
      Apellido: this.usuapellido,
      Correo: this.usucorreo,
      Password: this.usupass,
      Telefono: this.usutel,
    };
    this.servicio.createuser(formData).subscribe((data:RegistroTablasComponent)=>{
      alert("USUARIO AGREGADO")
    this.route.navigate(['/principal'])},
    (error)=>{
    console.error(error);
    alert("ERROR AL AGREGAR")
    
    })
  }
}




export class InputFormExample { }
