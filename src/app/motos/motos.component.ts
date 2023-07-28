import { Component ,OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ExitComponent } from '../sidenav/exit/exit.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from './editar/editar.component';
@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
  employees:any;
  selectedMoto:any;
  constructor(public dialog: MatDialog,private dataService:DataService){}
  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData(){
    this.dataService.getData().subscribe(res=>{
      this.employees=res;
      
    });
  }

  openDialog(emp: any) {
    this.dialog.open(EditarComponent, {
      width: '600px',
      height: '500px',
      data: emp // Pasamos la información de la fila seleccionada al componente del modal
    });
  }

  eliminarMoto(idMoto: number) {
    this.dataService.eliminarMoto(idMoto).subscribe(
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