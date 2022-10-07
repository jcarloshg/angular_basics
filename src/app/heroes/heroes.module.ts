import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/horoe.component';
import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    exports: [
        ListadoComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }