import { NgModule } from "@angular/core";
import { Contador } from "./contador/contador.component";

@NgModule({
    declarations: [
        Contador,
    ],
    exports: [
        Contador,
    ],
    imports: []
})
export class ContadorModule { }