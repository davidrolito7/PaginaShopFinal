import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent {
  constructor(private router: Router,public dialogRef: MatDialogRef<ExitComponent>) {}

  cerrar(){
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
  seguir(){
    this.dialogRef.close();
    this.router.navigate(['/principal']);
  }
}
