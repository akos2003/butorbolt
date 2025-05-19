import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Customer } from '../../pages/profile/model/customer-object';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   @Input() user: Customer | null = null;
   @Output() pageChanged = new EventEmitter<string>();

    menuValue:boolean=false;
    menu_icon :string ='&#9776';


  constructor(private authService : AuthService){}


  startMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? '&#10005;' : '&#9776;';
   }

   changeMenu(page: string) {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
     this.pageChanged.emit(page);
     console.log("we are going to:" + page);
   }

  logout(){
    console.log("logging out")
    this.user = null;
    this.authService.signOut();
  }




}
