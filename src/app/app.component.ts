import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Dynamic Text
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
}
