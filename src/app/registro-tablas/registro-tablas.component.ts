import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

export interface ExampleTab {
  label: string;
  content: any;
}


@Component({
  selector: 'app-registro-tablas',
  templateUrl: './registro-tablas.component.html',
  styleUrls: ['./registro-tablas.component.css'],

})
export class RegistroTablasComponent {
  asyncTabs: Observable<ExampleTab[]>;
  motomarca: string = ''; 
  motomodelo: string = '';
  motoimg:string = '';
  motocarac: string='';

  usunombre: string='';
  usuapellido: string='';
  usucorreo: string='';
  usupass: string='';
  usutel: string='';


  constructor(private servicio:DataService,private route: Router) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Registro de prendas', content: 'motoForm' },
        //  { label: 'Registro Caracteristicas', content: 'caracteristicas' },
          { label: 'Registro Usuarios', content: 'usuForm' },
        ]);
      }, 1000);
    });
  }

  onSubmitMotoForm() {
    console.log('Precio:', this.motomodelo);
    console.log('Modelo:', this.motomarca);
    console.log('Precio:', this.motoimg);
    console.log('Caracteristica de la moto:', this.motocarac);
    console.log('Nombre usuario:', this.usunombre);
    console.log('Nombre apellido:', this.usuapellido);
    console.log('Nombre correo:', this.usucorreo);
    console.log('Nombre telefono:', this.usutel);
    console.log('Nombre contraseña:', this.usupass);
  }

  onSubmit() {
    const formData = {
      Marca: this.motomarca, 
      Modelo: this.motomodelo, 
      Img:this.motoimg
    };
    this.servicio.createmoto(formData).subscribe((data:RegistroTablasComponent)=>{
      alert("dato agregado")
    this.route.navigate(['/motos'])},
    (error)=>{
    console.error(error);
    alert("no se agrego")
    this.route.navigate(['/registrodatos'])
    })
  }

  onCarac() {
    const formData = {
      Nombre: this.motocarac,
    };
    this.servicio.createcarac(formData).subscribe((data:RegistroTablasComponent)=>{
      alert("dato agregado")
    this.route.navigate(['/registrodatos'])},
    (error)=>{
    console.error(error);
    alert("no se agrego")
    this.route.navigate(['/registrodatos'])
    })
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
      alert("DATO AGREGADO")
    this.route.navigate(['/registrodatos'])},
    (error)=>{
    console.error(error);
    alert("ERROR AL AGREGAR")
    this.route.navigate(['/registrodatos'])
    })
  }
}
