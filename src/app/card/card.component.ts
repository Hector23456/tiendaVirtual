import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProducsArray, Product } from '../interface/productos';
import { ProductsService } from '../services/productos.service';
import { ProductDetailComponent } from "../product-detail/product-detail.component";


@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CommonModule, ProductDetailComponent]
})
export class CardComponent {
  closeModal() {
     this.individualProduct
  }
  @Input()list!: any;
  individualProduct: any; 
  productService= inject(ProductsService)
  
  constructor(private user: UsersService){}
  
  
  getProduct(ev : number){
    this.productService.getIndividualProduct(ev).subscribe((res: { results: any[]; })=>{
      this.individualProduct= res.results[0]
  
    }
    )
    
  }
  
  }