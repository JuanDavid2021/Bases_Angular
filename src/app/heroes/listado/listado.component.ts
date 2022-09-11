import { Component} from '@angular/core';

@Component({
  selector: 'app-listadoHero',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[]=["hulk", "Spiderman", "Thor", "Acuaman","ironman"]
  heroeBorrado:string=""
  
  borrar():any{
    this.heroeBorrado = this.heroes.pop() || ""
  } 
 
}
