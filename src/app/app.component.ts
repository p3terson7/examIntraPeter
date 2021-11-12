import { Component, OnInit } from '@angular/core';
import {Form} from './appForm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
   add(nbItems:number) {
    for (let i = 0; i < nbItems; i++) {
      
    }
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

}
