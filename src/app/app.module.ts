import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  exports:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
