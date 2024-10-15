import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get getCapitalize() :string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `Nombre es: ${this.name} de edad: ${this.age}`
  }

  changeName(name:string):void{
    this.name = name;
  }

  changeAge(age:number):void{
    this.age=age;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;
  }
}
