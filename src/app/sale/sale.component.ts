import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'mat-route';
  like = 0;
  dislike = 0;

  setLike() {
    this.like += 1
  }
  setDislike() { 
    this.dislike +=1
  }
}
