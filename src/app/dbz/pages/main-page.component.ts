import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Character[] =[{
    name:'Gohan',
    power:5000
  },
  {
    name:'Pikolo',
    power:9600
  },
  {
    name:'Veguetta',
    power:7500
  },]

  onNewCharacter(character:Character):void{
    console.log('MainPage');
    console.log(character);

      // Agregar el nuevo personaje al arreglo
    this.characters.push(character);
  }
}
