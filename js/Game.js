import { Result } from "./Result.js";
class Game {
  constructor({
    btnPeper,
    btnScissors,
    btnRock,
    buttons,
    pickedContainer,
    main,
    myPickContainer,
    myPickImg,
    rulesBtn,
    imgRulesContainer,
    header,
    closeRulesBtn,
    enemyPickContainer,
    enemyPickImg,
    lose,
    win,
    draw,
    playAgain,
    score,
    myCircles,
    enemyCircles
  }) {
    this.btnPeper = btnPeper;
    this.btnScissors = btnScissors;
    this.btnRock = btnRock;
    this.buttons = buttons;
    this.main = main;
    this.pickedContainer = pickedContainer;
    this.myPickContainer = myPickContainer;
    this.myPickImg = myPickImg;
    this.header = header;
    this.rulesBtn = rulesBtn;
    this.imgRulesContainer = imgRulesContainer;
    this.closeRulesBtn = closeRulesBtn;
    this.enemyPickContainer = enemyPickContainer;
    this.enemyPickImg = enemyPickImg;
    this.lose = lose;
    this.win = win;
    this.draw = draw;
    this.myCircles = myCircles;
    this.enemyCircles = enemyCircles;
    this.playAgain = playAgain;
    this.score = score;
  }

  start() {
    this.catchValue();
    this.showRules();
    this.closeRules();
  }

  catchValue() {
    this.btnPeper.addEventListener("click", () => {
      this.changeSection(this.btnPeper.value);
    });

    this.btnScissors.addEventListener("click", () => {
      this.changeSection(this.btnScissors.value);
    });

    this.btnRock.addEventListener("click", () => {
      this.changeSection(this.btnRock.value);
    });
  }

  changeSection(value) {
    this.main.classList.add("hide");
    this.pickedContainer.classList.add("show");
    this.rulesBtn.classList.add("show");

    this.myPickContainer.classList.add(value);
    this.myPickImg.src = `./images/icon-${value}.svg`;

    const elections = ["paper", "scissors", "rock"];
    const enemyPick = elections[Math.floor(Math.random() * elections.length)];

    this.enemyPickContainer.classList.add(enemyPick);
    this.enemyPickImg.src = `./images/icon-${enemyPick}.svg`;

    this.decision = new Result(value, enemyPick);
    this.decision.resultGame(this.score, this.myCircles, this.enemyCircles, this.win, this.draw, this.lose);

    this.restart(value, enemyPick);
  }

  showRules() {
    this.rulesBtn.addEventListener("click", () => {
      this.main.classList.add("dim");
      this.header.classList.add("dim");
      this.rulesBtn.classList.add("dim");
      this.imgRulesContainer.classList.add("show");
    });
  }

  closeRules() {
    this.closeRulesBtn.addEventListener("click", () => {
      this.imgRulesContainer.classList.remove("show");
      this.main.classList.remove("dim");
      this.header.classList.remove("dim");
      this.rulesBtn.classList.remove("dim");
    });
  }

  enemyRandomPick() {
    const elections = ["paper", "scissors", "rock"];

    const enemyPick = elections[Math.floor(Math.random() * elections.length)];

    return enemyPick;
  }

  restart(myPick, enemyPick) {
    this.playAgain.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.win.classList.add("hide");
        this.draw.classList.add("hide");
        this.lose.classList.add("hide");
        this.pickedContainer.classList.remove("show");
        this.main.classList.remove("hide");
        this.myPickContainer.classList.remove(myPick);
        this.myPickImg.src = ``;
        this.enemyPickContainer.classList.remove(enemyPick);
        this.enemyPickImg.src = "";
        this.myCircles.classList.add("hide");
        this.enemyCircles.classList.add("hide");
        this.rulesBtn.classList.remove("show");
      });
    });
  }
}

const game = new Game({
  btnPeper: document.getElementById("paper__btn"),
  btnScissors: document.getElementById("scissors__btn"),
  btnRock: document.getElementById("rock__btn"),
  buttons: document.querySelectorAll(".img-container"),
  header: document.getElementById("header"),
  main: document.getElementById("main"),
  pickedContainer: document.getElementById("picked"),
  myPickContainer: document.getElementById("img-container-pick"),
  myPickImg: document.getElementById("my-pick-img"),
  enemyPickContainer: document.getElementById("img-container-pick-enemy"),
  enemyPickImg: document.getElementById("enemy-pick-img"),
  imgRulesContainer: document.getElementById("rules__img-container"),
  rulesBtn: document.getElementById("rulesBtn"),
  closeRulesBtn: document.getElementById("close-rules"),
  lose: document.getElementById("lose-message"),
  win: document.getElementById("win-message"),
  draw: document.getElementById("draw-message"),
  enemyCircles: document.getElementById("enemy-circles"),
  myCircles: document.getElementById("my-circles"),
  playAgain: document.querySelectorAll(".show__message-btn"),
  score: document.getElementById("score")
});

game.start();
