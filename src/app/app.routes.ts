import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
