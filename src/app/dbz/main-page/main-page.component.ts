import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 987
  }

  // public agregarNuevoPersoname(personaje: Personaje) {
  //   // this.personajes.push(personaje);
  // }

}
