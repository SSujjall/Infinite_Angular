import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { IUser, UserService } from './services/user.service';
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
