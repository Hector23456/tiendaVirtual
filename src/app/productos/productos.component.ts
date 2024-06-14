import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { DolarService } from '../services/dolar.service';
import { DolarInterface } from '../interface/dolar.interface';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { Users } from '../interface/users.interface';
import { ProductsService } from '../services/productos.service';
import { ProducsArray, Product } from '../interface/productos';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports:[CardComponent, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)
  filteredData!: Product[]| null;
  searchData:string ='';
  constructor(private dolarService: DolarService, 
    private users: UsersService){
    
  }
  
  ngOnInit(): void {
    this.getAllProducts()
   }

  getAllProducts(){
    this.products.getProducts().subscribe((res:ProducsArray)=>{
    this.data = res.results

    })
  }

  getFileteredPruducts(){
    this.filteredData = this.data.filter((product: Product)=>{
      
      return product.nombre_producto.includes(this.searchData)

    })
  }
}