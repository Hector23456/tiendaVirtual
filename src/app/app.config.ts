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
    // otros componentes
  ],
  imports: [
    BrowserModule,
    // otros módulos
  ],
  providers: [
    provideHttpClient(withFetch())  // Configura HttpClient para usar fetch APIs
  ],
  bootstrap: [AppComponent]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
}


