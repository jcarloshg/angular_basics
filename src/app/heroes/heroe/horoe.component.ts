import { Component } from "@angular/core";


@Component({
    selector: 'app-horoe',
    templateUrl: 'horoe.component.html',
})
export class HeroeComponent {
    public nombre: string = 'Iron Man';
    public edad: number = 45;

    get nombreCapitalizado() { return this.nombre.toUpperCase() }

    obtenerNombre(): string { return `${this.nombre} ${this.edad}` }

    cambiarNombre(): void { this.nombre = 'Spiderman' }
    cambiarEdad(): void {
        console.log('laskdjf');
        this.edad = 24
    }
}