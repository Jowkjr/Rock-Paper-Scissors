class Game {
  constructor({ btnPeper, btnScissors, btnRock, buttons, pickedContainer, main }) {
    // this.paper = paper;
    // this.rock = rock;
    // this.scissors = scissors;
    this.btnPeper = btnPeper;
    this.btnScissors = btnScissors;
    this.btnRock = btnRock;
    this.buttons = buttons;
    this.main = main;
    this.pickedContainer = pickedContainer;
    this.catchValue();
    // this.changeSection();
  }

  start() {}

  catchValue() {
    this.btnPeper.addEventListener("click", () => console.log(this.btnPeper.value, this.changeSection()));
    this.btnScissors.addEventListener("click", () => console.log(this.btnScissors.value, this.changeSection()));
    this.btnRock.addEventListener("click", () => console.log(this.btnRock.value, this.changeSection()));

    //   this.changeSection();
    // this.btnPeper.forEach((btn) => {
    //   btn.addEventListener("click", () => console.log("fsafa"));
    // });
  }

  changeSection() {
    this.main.classList.add("hide");
    this.pickedContainer.classList.add("show");
    console.log("przycisk! :D");
  }
}

const game = new Game({
  btnPeper: document.getElementById("paper__btn"),
  btnScissors: document.getElementById("scissors__btn"),
  btnRock: document.getElementById("rock__btn"),
  buttons: document.querySelectorAll(".img-container"),
  main: document.getElementById("main"),
  pickedContainer: document.getElementById("picked")
});

game.start();
