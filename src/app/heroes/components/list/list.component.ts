import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Hulk','Spiderman','Ironman','Captain America','Batman']

  public heroeDeleted?: string =''

  removeLastHeroe():void{
    this.heroeDeleted = this.heroNames.pop();
  }
}
