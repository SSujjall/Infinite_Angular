import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {

    usernameFromts = ""
    imageFromts = ""



  onSubmit(form: any) {
    console.log(form, "form")
  }
}
