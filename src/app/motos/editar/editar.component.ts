import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { RegistroTablasComponent } from 'src/app/registro-tablas/registro-tablas.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  employees: any[] = [];
  motomarca: string = ''; 
  motomodelo: string = '';
  motoid: number;
  motoimg: string = ''; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router,public dialogRef: MatDialogRef<EditarComponent>,private servicio: DataService,) {
    // Aquí asignamos los valores recibidos de emp a las variables motomarca y motomodelo
    this.motoid=data.id;
    this.motomarca = data.Marca;
    this.motomodelo = data.Modelo;
    this.motoimg=data.Img;
  }

  onSubmitMotoForm() {
    console.log('Nombre del producto:', this.motomarca);
    console.log('Modelo', this.motomodelo);
    console.log('Precio', this.motoimg);
    console.log('Ca', this.motoid);
  }



  cancelar(){
    this.dialogRef.close();
    this.router.navigate(['/motos']);
  }
  editar() {
    
    const formData = {
      
      Marca: this.motomarca,
      Modelo: this.motomodelo,
      Img:this.motoimg
    };

    this.servicio.actualizarMoto(this.motoid,formData).subscribe((data:RegistroTablasComponent)=>{
      alert("DATO ACTUALIZADO")
       
        this.dialogRef.close();
        this.router.navigate(['/motos']);
      },
      (error) => {
        console.error(error);
        alert("ERROR AL GUARDAR");
      }
    )
  }
}
