import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
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

  //Metodo para recibie el index del elemento a eliminar.
  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
}
