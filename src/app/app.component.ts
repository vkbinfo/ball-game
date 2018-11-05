import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = 0;
  ballCount = 0;
  ballArray = [];
//   If there are no balls in the box it inserts a pink ball.
//   Every third ball is a green ball.
//   Every fifth ball is a blue ball.
//   Every fifteenth ball is a purple ball.
//   Every other ball is a pink ball.

// The sum shows the number of balls.

// The score shows the sum of the balls scores:

//   Pink Ball: 1
//   Green Ball: 3
//   Blue Ball: 5
//   Purple Ball: 15
  addABall() {
    this.ballCount += 1;
    let ball = 'pink';
    if (this.ballCount === 1) {
      this.score += 1;
    } else if ((this.ballCount % 15) === 0) {
      ball = 'purple';
      this.score += 15;
    } else if ((this.ballCount % 3) === 0) {
      ball = 'green';
      this.score += 3;
    } else if ((this.ballCount % 5) === 0) {
      ball = 'blue';
      this.score += 5;
    } else {
      this.score += 1;
      ball = 'pink';
    }
    this.ballArray.push(ball);
    console.log(this.ballArray);
  }
}
