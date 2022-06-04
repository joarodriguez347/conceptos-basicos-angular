import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  miLista: string[] = ['Goku','Crillin','Gohan','Picolo','Trunks'];

  elementoBortrado:string = ''; 

  borrarLista(){
    this.elementoBortrado = this.miLista.shift() || '';

  }

}
