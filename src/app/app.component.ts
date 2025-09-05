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
 
}
