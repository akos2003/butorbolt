import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, AfterViewInit {

   @Output() pageChanged = new EventEmitter<string>();

    menuValue:boolean=false;
    menu_icon :string ='&#9776';

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

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }


}
