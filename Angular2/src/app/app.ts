import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { IUser, UserService } from './services/user.service';
import { User } from './components/user/user';
import { Users } from './components/users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, User, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
