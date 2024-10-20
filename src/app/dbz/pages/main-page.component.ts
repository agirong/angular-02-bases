import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characterToEdit: Character | null = null;
  public isEditing:boolean = false;

  constructor(public dbzService:DbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  // Método para manejar la adición de un nuevo personaje
  onNewCharacter(character: Character): void {
    if (this.characterToEdit) {
      // Si hay un personaje en edición, actualizarlo
      console.log('Si hay un personaje en edición, actualizarlo onNewCharacter() main')
      this.dbzService.updateCharacter(character, this.characterToEdit.id!);
      this.characterToEdit = null; // Limpiar el formulario
      this.isEditing = false;
    } else {
      this.dbzService.addCharacter(character);
    }
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onEditCharacter(character:Character):void{
    console.log('Se ejecutó el onEditCharacter de main con:', character);
    this.characterToEdit = {...character}
    this.isEditing = true;
    console.log('isEditing:', this.isEditing);
  }
}
