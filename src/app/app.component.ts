import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Learning';
  constructor(public router:Router){
  }
  onSubmit(data: any){
    console.log(data);
  }
}
