// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilitar fetch para HttpClient
    provideRouter(routes), provideAnimationsAsync(), // Usar la configuración de rutas definida en app.routes.ts
  ]
}).catch(err => console.error(err));
