import { Rules } from "./Rules.js";
class Game {
  constructor({ btnPeper, btnScissors, btnRock, buttons, pickedContainer, main, myPickContainer, myPickImg, rulesBox, rulesBtn, imgRulesContainer, header, closeRulesBtn, enemyPickContainer, enemyPickImg, lose, win }) {
    // this.paper = paper;
    // this.rock = rock;
    // this.scissors = scissors;
    this.btnPeper = btnPeper;
    this.btnScissors = btnScissors;
    this.btnRock = btnRock;
    this.buttons = buttons;
    this.main = main;
    this.pickedContainer = pickedContainer;
    this.myPickContainer = myPickContainer;
    this.myPickImg = myPickImg;
    // this.rulesBox = rulesBox;
    this.header = header;
    this.rulesBtn = rulesBtn;
    this.imgRulesContainer = imgRulesContainer;
    this.closeRulesBtn = closeRulesBtn;
    this.enemyPickContainer = enemyPickContainer;
    this.enemyPickImg = enemyPickImg;
    this.lose = lose;
    this.win = win;
    this.catchValue();
    this.showRules();
    this.closeRules();
    // this.result();
    // this.enemyRandomPick();
    // this.changeSection();
  }

  start() {
    // const showRules = this.rulesBox.showRules();
    // showRules();
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

    // this.btnScissors.addEventListener("click", () => console.log(this.btnScissors.value, this.changeSection()));
    // this.btnRock.addEventListener("click", () => console.log(this.btnRock.value, this.changeSection()));

    //   this.changeSection();
    // this.btnPeper.forEach((btn) => {
    //   btn.addEventListener("click", () => console.log("fsafa"));
    // });
  }

  changeSection(value) {
    this.main.classList.add("hide");
    this.pickedContainer.classList.add("show");
    // console.log(value);
    this.myPickContainer.classList.add(value);
    this.myPickImg.src = `./images/icon-${value}.svg`;

    // this.enemyRandomPick(enemyPick);
    const elections = ["paper", "scissors", "rock"];

    const enemyPick = elections[Math.floor(Math.random() * elections.length)];
    this.enemyPickContainer.classList.add(enemyPick);
    this.enemyPickImg.src = `./images/icon-${enemyPick}.svg`;

    this.result(value, enemyPick);
  }

  // showRules() {}
  //
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

  result(myPick, enemyPick) {
    console.log(myPick, enemyPick);

    if ((myPick === "paper" && enemyPick === "rock") || (myPick === "rock" && enemyPick === "scissors") || (myPick === "scissors" && enemyPick === "paper")) {
      console.log("Wygrałeś!");

      this.win.classList.remove("hide");
    } else if (myPick === enemyPick) {
      console.log("Remis!");
    } else {
      console.log("Przegrałeś!");

      this.lose.classList.remove("hide");
    }
  }
}

// const rulesBox = new Rules(document.getElementById("rulesBtn"));

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
  win: document.getElementById("win-message")
  // rulesBox
});

game.start();
