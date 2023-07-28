import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';

import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  correo: string = '';
  isLoading=false;

  


  constructor(private router:Router, public dialog: MatDialog ){}
  
  ngOnInit(): void {
    
  }
  submitForm(form: NgForm) {
    
      if (form.invalid) {
        this.openDialog('0ms', '0ms');
        return;
        
      }
      console.log('Formulario válido. Datos enviados:', form.value);
      this.navigation();
  }
  registro(){
    this.router.navigate(['/registrar'])
  }
  navigation(){
    if (!this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['/principal']);
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

}
export class InputFormExample {}