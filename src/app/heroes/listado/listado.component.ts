import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes: string[] = ['SpiderMan', 'Doc Doom', 'Doctor Strange', 'Hulk', 'Mr. Fantastico'];
  public heroeBorrado: string = '';

  constructor() {
    console.log('contructor');
  }

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado || '';
  }

}
