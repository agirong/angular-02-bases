import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[] =[{
    id:uuid(),
    name:'Gohan',
    power:5000
  },
  {
    id:uuid(),
    name:'Pikolo',
    power:9600
  },
  {
    id:uuid(),
    name:'Veguetta',
    power:7500
  },]

  onNewCharacter(character:Character):void{
    const newCharacter: Character = {id:uuid(), ...character};

    this.characters.push( newCharacter);
  }

  //Metodo para recibie el index del elemento a eliminar.
  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
