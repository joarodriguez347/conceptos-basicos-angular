import { Component } from '@angular/core';


@Component({

    selector: 'app-contador',
    template: `

        <h1> {{ titulo }} </h1>

        <button (click)="acumular(+1)"> + 1</button>

        <span> {{ numero2 }} </span>

        <button (click)="acumular(-1)"> - 1</button>

    `
})

export class ContadorComponent{

    titulo:string = 'Contador App';
    numero1:number = 50; 
    numero2:number = 10; 


    acumular(valor:number){
        this.numero2+=valor;
    }

}