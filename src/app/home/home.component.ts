import { Component, OnInit } from '@angular/core';
import { ListPersonComponent } from '../list-person/list-person.component';
import { CommonModule } from '@angular/common';  // Importa tu interfaz de usuario

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListPersonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users= [
      "Jhon",
     "Maria",
    "Admin",
     "pirates",
    "призрак",
    ]
    
    addUserToList(user: string) {
      console.log(user);
      
      this.users.push(user)
    }
}