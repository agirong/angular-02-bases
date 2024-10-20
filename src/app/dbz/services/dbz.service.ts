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

  addCharacter(character:Character):void{
    const newCharacter: Character = {id:uuid(), ...character};

    this.characters.push( newCharacter);
  }

  //Metodo para recibie el index del elemento a eliminar.
  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    const characterToDelete = this.characters.find(character=>character.id==id)
    if(characterToDelete){
      this.characters = this.characters.filter(character => character.id !== id);
      alert('Se eliminará el personaje: '+characterToDelete.name);
    }
  }

  updateCharacter(updatedCharacter: Character, id: string): void {
    const index = this.characters.findIndex(character => character.id === id);
    if (index !== -1) {
      this.characters[index] = { ...updatedCharacter, id }; // Mantener el mismo ID
      console.log('Se editó el personaje: '+index);
    }
  }

}
