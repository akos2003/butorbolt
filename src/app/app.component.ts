import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { Customer } from './pages/profile/model/customer-object';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentUser: Customer | null = null;

  constructor(private authService: AuthService, private router : Router){}
  title = 'butorbolt';
  page = 'home';

  changePage(page: string){
    console.log('User from AuthService:', this.currentUser);
    if(page == 'home'){
      console.log('home')
      this.router.navigate(['/home'])
    } else if(page == 'profile'){
      console.log('profile')
      this.router.navigate(['/profile'])
    }
    this.page = page;
    this.router.navigate(['/'+page])
  } 

  ngOnInit() {
    this.authService.currentUser$.subscribe((user: Customer | null) => {
      this.currentUser = user;
      console.log('User from AuthService:', user);
      //this.router.navigate(['/home'])
    });}

}
