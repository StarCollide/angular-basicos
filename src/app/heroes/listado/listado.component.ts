import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Chapulin', 'Vegetta', 'Jonesin', 'Doom Guy']
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log("borrando...");
    this.heroeBorrado = this.heroes.shift() || "";
  }
}