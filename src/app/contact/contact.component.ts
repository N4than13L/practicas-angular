import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public nombre: string
  public apellido: string

  constructor() { 
    this.nombre = ''
    this.apellido = ''
  }

  ngOnInit(): void {
    this.Mostrar()
  }

  Mostrar(){
    console.log('mensaje enviado con exito de parte de: '
     + this.nombre + ' ' +  this.apellido)
  }

}
