import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent implements OnChanges {
  @Input()
  public characterToEdit: Character = { name: '', power: 0 };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name:'',
    power:0
  }

  public isEditing:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['characterToEdit'] && this.characterToEdit) {
      // Si hay un personaje para editar, lo asignamos al formulario
      this.character = { ...this.characterToEdit };
    }
  }
  emitCharacter():void{
    console.log('Emitir el personaje: ', this.character);
    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit({...this.character});

    //Limipar el formulario
    this.character = { name: '', power: 0 };
  }
}
