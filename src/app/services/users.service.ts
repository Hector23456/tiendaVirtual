import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public variable_prueba : string = 'Hola mundo';

  constructor(private http: HttpClient) { }


  getUsers():Observable<Users>{
    return this.http.get<Users>('https://api.escuelajs.co/api/v1/users')
  }

  getUser(id: number): Observable<Users>{
    return this.http.get<Users>(`https://api.escuelajs.co/api/v1/users/${id}`)
  }
  
}

