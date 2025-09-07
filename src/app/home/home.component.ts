import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/product-item.component';
import { Book } from '../shared/types/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    ProductItemComponent,
    NgIf,
    
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  // router
  constructor(private router: Router){

  }
  handleToLogin(){
    this.router.navigate(['/login'])
  }
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
  products: ProductItems[] = [
    {id: 1,name:'Shoe 1',price:400000, image:'assets/images/shoe.jpg'},
    {id: 2,name:'Shoe 2',price:500000, image:'assets/images/shoe.jpg'},
    {id: 3,name:'Shoe 3',price:500000, image:'assets/images/shoe.jpg'},
    {id: 4,name:'Shoe 4',price:700000, image:'assets/images/shoe.jpg'},
   ]

   // Directive gôm có 3 cái : Component, Structural, Attribute
   // Component : Template HTML và UI - Component
   // Structural: nglf, ngFor, ngSwitch cho phép thay đổi cấu trúc DOM thêm or delete
   // Attribute: ngClass, ngStyle, hidden, disable,.. Cho phép thay đổi hành vi của phần tử
    isActive = true
    handleActive(): void{
      this.isActive = !this.isActive
    }
    isVisible: boolean = true
    
    handleDelete(id: number){
      const indexFind = this.products.findIndex(i => i.id == id);
      if(indexFind != -1){
        this.products.splice(indexFind,1)
      }
    }

    books: Book[] = [
      {id:1,name:"test1"},
      {id:2,name:"test2"},
      {id:3,name:"test3"},
    ]
    HandleDeleteBook(id: number){
      // const findIndex = this.books.findIndex(i => i.id == id);
      // if(findIndex != -1){
      //   this.books.splice(findIndex,1)
      // }
      this.books = this.books.filter(i => i.id !== id)
    }
    // Constrcutor cho phép cta sử dụng service or direcyti từ file, componnet hay thư viện bn đã khợi tạo ra
    
    // ngOnInit nhiệm vụ là lm vc và tt vs API 
    ngOnInit(): void{
     console.log('Initialization Component')
     fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    // DoCheck sẽ thay đổi và cập nhật theo bất kì cái gì thay đổi trong code : state, hàm, DOM
    // ngDoCheck(): void {
    //     console.log("check Component")
    // }
    handleIsVisible(){
      this.isVisible = !this.isVisible
    }
}
