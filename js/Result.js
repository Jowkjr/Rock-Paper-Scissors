export class Result {
  constructor(myPick, enemyPick) {
    this.myPick = myPick;
    this.enemyPick = enemyPick;
  }

  resultGame(score, myCircles, enemyCircles, win, draw, lose) {
    if ((this.myPick === "paper" && this.enemyPick === "rock") || (this.myPick === "rock" && this.enemyPick === "scissors") || (this.myPick === "scissors" && this.enemyPick === "paper")) {
      score.textContent++;
      myCircles.classList.remove("hide");
      win.classList.remove("hide");
    } else if (this.myPick === this.enemyPick) {
      draw.classList.remove("hide");
    } else {
      enemyCircles.classList.remove("hide");
      if (score.textContent > 0) {
        score.textContent--;
      }
      lose.classList.remove("hide");
    }
  }
}
