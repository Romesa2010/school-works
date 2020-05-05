import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  title = 'register'
  constructor() { }

  ngOnInit(): void {
  }
  register(){

  }
  cancel (){

  } 
}

