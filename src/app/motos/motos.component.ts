import { Component, OnInit } from '@angular/core'
import { Motos } from "../models/Motos"

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})


export class MotosComponent implements OnInit {
 public titulo: string = "Tienda de motos"
 public motos: Array<Motos>
 public motocycletas: String[]
 public color: string
  
  constructor() {
    this.color = 'blue'
    this.motocycletas = new Array()
    this.motos = [
      new Motos('Ducati', 'Panigale v4', 'Deportiva', 6),
      new Motos('KTM', 'Super Duke 1200', 'Naked', 4),
      new Motos('Yamaha', 'M1', 'Deportiva', 5),
      new Motos('KTM', 'Enduro 400', 'Off Road', 10)
    ]
  }

  ngOnInit(): void {
    console.log(this.motos)
    this._Motos()
  }

  _Motos(){
    this.motos.forEach((_motos, index) => {

      if (this.motocycletas.indexOf(_motos.marca) < 0) {
        this.motocycletas.push(_motos.marca)

      }
        console.log(index)
    })

    console.log(this.motocycletas)

  }

}
