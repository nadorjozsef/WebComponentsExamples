import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uibutton',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.css']
})
export class UIButtonComponent implements OnInit {

  text: string = '';
  @Input() addClearButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  generateRandomNumber(){
    this.text = (Math.random() * (100 - 1) + 1).toFixed(0).toString();
  }

  clear(){
    this.text = '';
  }

}
