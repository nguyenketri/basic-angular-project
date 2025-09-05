import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet,
  RouterLink 
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id = ''
  constructor(private route: ActivatedRoute){
  this.id = String(route.snapshot.paramMap.get('id')) ;
  }
}
