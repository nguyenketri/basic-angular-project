import { Component, Input, Output,EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../types/productItem';
import { Book } from '../types/books';



@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: 
  [RouterOutlet,
  FormsModule,
    CurrencyPipe,
    UpperCasePipe,
    NgFor,
    NgClass,
    NgIf,
    RouterLink
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges, OnDestroy {
  // Props có 3 tính chất 
  // Truyền dữ liệu 1 chiều : Từ component cha đến component con
  // Không thay đổi được dữ liệu: Component con không dk phép chỉnh sửa trực tiếp giá trị Props
  // Hỗ trợ mọi loại dữ liệu : Có thể là string, number, object, array,function...
   @Input() products: ProductItems[] = [];
   
   @Output() dataEvent = new EventEmitter<number>();

   handleDelete(id: number){
   this.dataEvent.emit(id)
   }
    
   // Book
    @Input() books: Book[] = [];
    @Output() dataBook = new EventEmitter<number>();
    handleDeleteBook(id: number){
      this.dataBook.emit(id)
    }

    // Getter
    get totalPrice(): string{
        const sum = this.products.reduce((t,c)=> {return t+c.price },0)
        return `Total Price ${sum}`
    }
    // onChange dùng trong Componnet Con và đặc biệt phải sử dụng ở Props
    // luôn nhận 1 gtri change cho phép biết props hiện tại và props trc đó
    ngOnChanges(changes: SimpleChanges): void {
       console.log(changes['books'].currentValue)
       console.log(changes['books'].previousValue)
   }

   ngOnDestroy(): void {
       console.log("Component remove")
   }
  }
