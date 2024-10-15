import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Cuenta de Ahorro L. {{counter}}</h3>
  <button class="btn btn-success" (click)="increaseBy(-1)">-1</button>
  <button class="btn btn-secondary" (click)="resetBy(10)">Reset</button>
  <button class="btn btn-success" (click)="increaseBy(+1)">+1</button>
  `
})

export class CounterComponent {
  public title:string = 'Aaron Giron';
  public counter: number = 10.00;

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetBy (value: number):void{
    this.counter = value;
  }
}
