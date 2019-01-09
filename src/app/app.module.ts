import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { HomeViewComponent } from './view/home/home.view.component';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    NavbarComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }