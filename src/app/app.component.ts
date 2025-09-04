import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderLayoutComponent,
    FormsModule,
    CurrencyPipe,
    UpperCasePipe,
    NgFor,
    NgClass,
    NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // *  Dynamic Text
  title = {
    name:"Tri",
    age:21,
  };
  // Dynamic Property
  isDisabled = true;
  // Dynamic Attribute
  contentImage = "Shopping"
  // Attribute Binding
  altText = "conneo"

  // * Event binding
  nameBtn = 'Click me'
  message =""
  handleClick(): void{
   this.message ="tri"
  
  }
  handleClickName(name: String):void{
    alert(name)
  }
  updateField(): void{
    console.log("Hello")
  }
  // keyup event
  onKeyup(event: KeyboardEvent): void{
   console.log((event.target as HTMLInputElement).value)
  }
  // chage event
  onChange(event: Event): void{
   console.log((event.target as HTMLInputElement).value)
  }
  // two way binding
  twoBindingMessage = ''

  // list data render 
  products = [
    {name:'Shoe 1',price:400000, image:'assets/images/shoe.jpg'},
    {name:'Shoe 2',price:500000, image:'assets/images/shoe.jpg'},
    {name:'Shoe 3',price:500000, image:'assets/images/shoe.jpg'},
    {name:'Shoe 4',price:700000, image:'assets/images/shoe.jpg'},
   ]

   // Directive gôm có 3 cái : Component, Structural, Attribute
   // Component : Template HTML và UI - Component
   // Structural: nglf, ngFor, ngSwitch cho phép thay đổi cấu trúc DOM thêm or delete
   // Attribute: ngClass, ngStyle, hidden, disable,.. Cho phép thay đổi hành vi của phần tử
    isActive = true
    handleActive(): void{
      this.isActive = !this.isActive
    }
    isVisible = false
}
