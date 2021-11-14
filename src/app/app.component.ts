import { Component } from '@angular/core';

enum x {
  top='top',
  bottom='bottom',
  hidden='hidden'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';

  menu = 4;
  sousMenu = 2;
  color = 'bg-danger';
  url = '';
  pos = x;
  posNav = x.top;



  constructor() {}
  menufunc(): string[] {
  const a: string[] = [];

  for(let i = 0; i < this.menu; i++) {
    a.push(`Element_${i+1}`)
  }
    return a;
  }

  sousmenufunc(): string[] {
    const a: string[] = [];
    for(let i = 0; i < this.menu; i++) {
      a.push(`SousElement_${i+1}`)
    }
      return a;
  }
  colorfunc(): object {
    let a: {[key: string]: boolean} = {};

    a[this.color]=true;
    return a;
  }
  bttnHautfunc(): void {
    this.posNav = x.top
  }
  bttnBasfunc(): void {
    this.posNav = x.bottom
  }
  bttnHiddfunc(): void {
    this.posNav = x.hidden
  }
}
