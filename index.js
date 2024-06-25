const snakeGameBoard = document.querySelector(".snake-game");
const gameRunnerSound = new Audio("game_runnner.mp3");
const gamePlaySound = new Audio("game_play.mp3");
const gameOverSound = new Audio("game_over.wav");
const gameFoodEatingSound = new Audio("food_eating_sound.wav");
let snakeSpeed = 20;
let snakeDirection = { x: 0, y: 0 };
let snakePosition = [{ x: 13, y: 10 }];
let snakePaintTime = 0;
let score = 0;
let foodDirection = { x: 10, y: 12 };

function mainGame(a) {
  window.requestAnimationFrame(mainGame);
  if (a - snakePaintTime / 1000 < 1 / snakeSpeed) {
    return;
  }
  snakePaintTime = a;
  gameRunner();
}

function gameRunner() {
  snakeGameBoard.innerHTML = "";
  snakePosition.forEach(function (b, c) {
    let snake = document.createElement("div");
    snake.classList.add("snakeIncreasing");
    snakeGameBoard.appendChild(snake);
    snake.style.gridRowStart = b.x;
    snake.style.gridColumnStart = b.y;
    if (c == 0) {
      snake.classList.add("snakeTop");
    }
  });

  let food = document.createElement("div");
  food.classList.add("food");
  food.style.gridRowStart = foodDirection.x;
  food.style.gridColumnStart = foodDirection.y;
  snakeGameBoard.appendChild(food);
}

window.requestAnimationFrame(mainGame);

window.addEventListener("keydown", function (e) {
  gameRunnerSound.play();

  if (e.key === "ArrowUp") {
  } else if (e.key === "ArrowDown") {
  } else if (e.key === "ArrowLeft") {
  } else if (e.key === "ArrowRight") {
  }
});

// let snake = document.querySelector(".snake");
// console.log(snake.clientLeft);

// snake.addEventListener("keyup", function (y) {
//   console.log(y);
// });
// function mover(u) {
//   // snake.style.top = clientY + "px";
//   console.log(u);
// }

// mover();
// let snakeY = snake.clientTop;
// let snakeX = snake.clientLeft;
// document.body.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowUp") {
//     if (snakeY == 0) {
//       snake.style.top = "0%";
//       console.log("top 0");
//     } else {
//       snake.style.top = snakeY-- + "%";
//     }
//   } else if (e.key === "ArrowDown") {
//     if (snakeY == 95) {
//       snake.style.top = "95%";
//       console.log("top 95");
//     } else {
//       snake.style.top = snakeY++ + "%";
//     }
//   } else if (e.key === "ArrowLeft") {
//     if (snakeX == 0) {
//       snake.style.left = "0%";
//       console.log("left 95");
//     } else {
//       snake.style.left = snakeX-- + "%";
//     }
//   } else if (e.key === "ArrowRight") {
//     if (snakeX == 98) {
//       snake.style.left = "98%";
//       console.log("right 95");
//     } else {
//       snake.style.left = snakeX++ + "%";
//     }
//   }
// });
