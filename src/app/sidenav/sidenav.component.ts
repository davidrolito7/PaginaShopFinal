import { Component, EventEmitter, OnInit, Output,HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExitComponent } from './exit/exit.component';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<SideNavToggle>=new EventEmitter();
  screenWidth=0;
  collapsed=false;
  navData = navbarData;

  constructor(public dialog: MatDialog){}

  
  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed=false;    
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
    }
  }
  ngOnInit(): void{
    this.screenWidth=window.innerWidth;
  }

  closeSidenav(): void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
        
  }
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
  }



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ExitComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}