import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
   name: string = ''
   password: string = ''
  
  constructor(private router: Router){

  }

   onSubmit() {
    if(this.name == 'tri' && this.password == '123'){
      console.log("oke")
      alert("success")
      this.router.navigate(['/'])
    }else{
      console.log('no no no')
      alert('Worng pass')
    }
   }
}
