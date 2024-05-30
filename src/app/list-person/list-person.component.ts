import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.css'
})
export class ListPersonComponent implements OnInit {
  @Input() persons: any[] = [];
  @Output() newUser = new EventEmitter<string>
  person: string =''
  ngOnInit(): void {
 }
 addUser() {
  this.newUser.emit(this.person) 
  this.person = ''
 }
}