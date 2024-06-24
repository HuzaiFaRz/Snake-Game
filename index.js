let snakeGame = document.querySelector(".snake-game");
const gameRunner = new Audio("game_runnner.mp3");
const gamePlay = new Audio("game_play.mp3");
const gameOver = new Audio("game_over.wav");
const gameFoodEating = new Audio("food_eating_sound.wav");
let snakeSpeed = 20;
let snakeDirection = { x: 0, y: 0 };
let snake = document.createElement("div");
snake.classList.add("snake");
snakeGame.appendChild(snake);

function mainGame(a) {
  window.requestAnimationFrame(mainGame);
  console.log(a);
}

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
