import { NgModule } from '@angular/core';
import { ApplicationConfig,} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';

NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [
    provideHttpClient(withFetch())  
  ],
  bootstrap: [AppComponent]
})


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
}


