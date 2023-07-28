import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }

  // getData(){
  //   return this.http.get('http://127.0.0.1:8000/api/motos');
  // }
  getData() {
    return this.http.get('http://127.0.0.1:8000/api/Moto_Carac');
  }
  getUsuarios(){
    return this.http.get('http://127.0.0.1:8000/api/usuarios');
  }


  //Crear un registro de moto
  createmoto(data:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/motos',data)
    .pipe(map((data:any)=>{
      console.log(data);
      return data;
    }))
  }

  
  actualizarMoto(codigo:number,data: any) {
    console.log("El codigo es ;"+codigo+data);
    return this.http.put<any>('http://127.0.0.1:8000/api/motos/' + codigo, data)
      .pipe(map((response: any) => {
        console.log(response);
        return response;
      }));
  }
  eliminarMoto(idMoto: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/motos/${idMoto}`);
  }

  //Crear un registro de caracteristica
  createcarac(data:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/caracteristicas',data)
    .pipe(map((data:any)=>{
      console.log(data);
      return data;
    }))
  }

  //Crear un registro de caracteristica
  createuser(data:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/usuarios',data)
    .pipe(map((data:any)=>{
      console.log(data+"hola");
      return data;
    }))
  }
  eliminarUsuario(idUsu: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/usuarios/${idUsu}`);
  }
  
}