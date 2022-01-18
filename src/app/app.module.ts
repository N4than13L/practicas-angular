import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MotosComponent } from './motos/motos.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { _modulesWithProviders } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    MotosComponent,
    HomeComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    _modulesWithProviders
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
