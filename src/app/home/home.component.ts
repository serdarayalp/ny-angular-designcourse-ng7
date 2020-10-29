import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /*
  (focus)="myMethod()"
  (blur)="myMethod()" 
  (submit)="myMethod()"  
  (scroll)="myMethod()"

  (cut)="myMethod()"
  (copy)="myMethod()"
  (paste)="myMethod()"

  (keydown)="myMethod()"
  (keypress)="myMethod()"
  (keyup)="myMethod()"

  (mouseenter)="myMethod()"
  (mousedown)="myMethod()"
  (mouseup)="myMethod()"

  (click)="myMethod()"
  (dblclick)="myMethod()"

  (drag)="myMethod()"
  (dragover)="myMethod()"
  (drop)="myMethod()"
  */
  firstClick() {
    // console.log('clicked');
    this.h1Style = true;
  }
}
