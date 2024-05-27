import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos';  // Importa tu interfaz de producto

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Producto[]>('https://api.example.com/productos')  // Ajusta la URL de tu API
      .subscribe(productos => {
        this.productos = productos;
      });
  }
}