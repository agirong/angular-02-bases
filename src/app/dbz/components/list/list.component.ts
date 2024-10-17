import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    //Evento a emitir
    @Output()
    public onIndexDelete: EventEmitter<number> = new EventEmitter();

    onDeleteCharacter(index:number):void{
      //Emitir el evento para que lo reciba el MainPageComponent
      this.onIndexDelete.emit(index)
      console.log(index)
    }
 }
