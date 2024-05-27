import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users.interface';  // Importa tu interfaz de usuario

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('https://api.example.com/users')  // Ajusta la URL de tu API
      .subscribe(users => {
        this.data = users;
      });
  }
}