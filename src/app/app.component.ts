import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [RouterOutlet,
  HeaderLayoutComponent,
  HomeComponent,
  DetailComponent  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Props có 3 tính chất 
  // Truyền dữ liệu 1 chiều : Từ component cha đến component con
  // Không thay đổi được dữ liệu: Component con không dk phép chỉnh sửa trực tiếp giá trị Props
  // Hỗ trợ mọi loại dữ liệu : Có thể là string, number, object, array,function...


  // LifeCycle có 4 vòng đời chính đó chính là
  // Creation , Change Detection, rendering, destruction

  // 1 Creation (Constructor, ngOnInit)
}
