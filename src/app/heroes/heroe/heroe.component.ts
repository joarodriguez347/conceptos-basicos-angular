import { Component } from "@angular/core";


@Component({

    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'SuperMan';

    edad  : number = 45;


    get nombreCapitalizado(){

        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {

        return `${this.nombre} - ${this.edad}`;
    }


    cambiarNombre():void {
        
        this.nombre='Capitan America';

    }

    cambiarEdad():void {

        this.edad=29;
    }
}