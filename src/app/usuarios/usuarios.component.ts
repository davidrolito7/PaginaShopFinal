import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  employees:any;
  selectedMoto:any;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData(){
    this.dataService.getUsuarios().subscribe(res=>{
      this.employees=res;
      
    });
  }

  eliminarUsuario(idMoto: number) {
    this.dataService.eliminarUsuario(idMoto).subscribe(
      (data) => {
        // Actualizar la lista de motos después de eliminar
        this.getEmployeesData();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openModal(moto: any) {

    this.selectedMoto = moto;
    console.log(this.selectedMoto);
  }


}
