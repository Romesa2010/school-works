import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
