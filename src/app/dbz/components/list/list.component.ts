import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
    @Input()
    public characterList:Character[] =[{
      name:'Trunks',
      power:10
    }]

    //Evento a emitir para eliminar
    @Output()
    public onIndexDelete: EventEmitter<string> = new EventEmitter();
    onDeleteCharacter( id?: string ):void {
      if ( !id ) return;
      console.log({id})
      this.onIndexDelete.emit( id );
    }

    //Evento a emitir para actualizar
    @Output()
    public onEdit:EventEmitter<Character> = new EventEmitter();
    onEditCharacter(character: Character): void {
      console.log('Emitir'+ JSON.stringify(character))
      this.onEdit.emit(character);
    }
 }
