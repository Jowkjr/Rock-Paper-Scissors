class Game {
  constructor({ btnPeper, btnScissors, btnRock, buttons, pickedContainer, main, myPickContainer, myPickImg }) {
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
    this.catchValue();
    // this.changeSection();
  }

  start() {}

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
    // console.log(this.myPickImg);
    this.myPickContainer.classList.add(value);
    this.myPickImg.src = `./images/icon-${value}.svg`;
  }
}

const game = new Game({
  btnPeper: document.getElementById("paper__btn"),
  btnScissors: document.getElementById("scissors__btn"),
  btnRock: document.getElementById("rock__btn"),
  buttons: document.querySelectorAll(".img-container"),
  main: document.getElementById("main"),
  pickedContainer: document.getElementById("picked"),
  myPickContainer: document.getElementById("img-container-pick"),
  myPickImg: document.getElementById("my-pick-img")
});

game.start();
