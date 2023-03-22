import { Rules } from "./Rules.js";
class Game {
  constructor({ btnPeper, btnScissors, btnRock, buttons, pickedContainer, main, myPickContainer, myPickImg, rulesBox, rulesBtn, imgRulesContainer, header, closeRulesBtn }) {
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
    this.catchValue();
    this.showRules();
    this.closeRules();
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
    console.log(value);
    this.myPickContainer.classList.add(value);
    this.myPickImg.src = `./images/icon-${value}.svg`;
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
  imgRulesContainer: document.getElementById("rules__img-container"),
  rulesBtn: document.getElementById("rulesBtn"),
  closeRulesBtn: document.getElementById("close-rules")
  // rulesBox
});

game.start();
