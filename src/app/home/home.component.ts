import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
