const snakeGamResult = document.querySelector(".game-result");
const snakeGameResultGuideNess = document.querySelector(".guide");
const snakeGameBoard = document.querySelector(".snake-game");
const gameRunnerSound = new Audio("game_runnner.mp3");
const gamePlaySound = new Audio("game_play.mp3");
const gameOverSound = new Audio("game_over.wav");
const gameTurnSound = new Audio("game-turn.mp3");
const gameFoodEatingSound = new Audio("food_eating_sound.wav");
let snakeSpeed = 6;
let snakeDirection = { x: 0, y: 0 };
let snakePosition = [{ x: 8, y: 9 }];
let snakePaintTime = 0;
let score = 0;
let foodDirectionA = 2;
let foodDirectionB = 16;
let foodDirection = { x: 5, y: 5 };

function mainGame(a) {
  window.requestAnimationFrame(mainGame);
  if ((a - snakePaintTime) / 1000 < 1 / snakeSpeed) {
    return;
  }
  snakePaintTime = a;
  gameRunner();
}

function gameRunner() {
  if (snakeCollide(snakePosition)) {
    gameOverSound.play();
    gameRunnerSound.pause();
    snakeDirection = { x: 0, y: 0 };
    snakeGamResult.style.display = "flex";
    snakeGameResultGuideNess.textContent =
      "Game Over Press Any Enter To Again Start a Game";
  }
  // if (snakePosition[]) {

  // }

  if (
    snakePosition[0].x === foodDirection.x &&
    snakePosition[0].y === foodDirection.y
  ) {
    snakePosition.unshift({
      x: snakePosition[0].x + snakeDirection.x,
      y: snakePosition[0].y + snakeDirection.y,
    });
    foodDirection = {
      x: Math.round(
        foodDirectionA + (foodDirectionB - foodDirectionA) * Math.random()
      ),
      y: Math.round(
        foodDirectionA + (foodDirectionB - foodDirectionA) * Math.random()
      ),
    };
  }

  for (let i = snakePosition.length - 2; i >= 0; i--) {
    snakePosition[i + 1] = { ...snakePosition[i] };
  }

  snakePosition[0].x += snakeDirection.x;
  snakePosition[0].y += snakeDirection.y;

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
function snakeCollide(snakeCollide) {
  for (let i = 1; i < snakePosition.length; i++) {
    if (
      snakePosition[i].x === snakePosition[0].x &&
      snakePosition[i].y === snakePosition[0].y
    ) {
      return true;
    }
  }
  return (
    snakePosition[0].x < 0 ||
    snakePosition[0].x >= 18 ||
    snakePosition[0].y < 0 ||
    snakePosition[0].y >= 18
  );
}

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    snakeGamResult.style.display = "none";
    snakeDirection = { x: 0, y: 1 };
    gameRunnerSound.play();
  }

  if (e.key === "ArrowUp") {
    gameTurnSound.play();
    snakeDirection = { y: -1, x: 1 };
  } else if (e.key === "ArrowDown") {
    gameTurnSound.play();
    snakeDirection = { y: 1, x: 0 };
  } else if (e.key === "ArrowLeft") {
    gameTurnSound.play();
    snakeDirection = { y: 0, x: -1 };
  } else if (e.key === "ArrowRight") {
    gameTurnSound.play();
    snakeDirection = { y: 0, x: 1 };
  }
});
window.requestAnimationFrame(mainGame);
// const snakeGamResult = document.querySelector(".game-result");
// const snakeGameResultGuideNess = document.querySelector(".guide");
// const snakeGameBoard = document.querySelector(".snake-game");
// const gameRunnerSound = new Audio("game_runnner.mp3");
// const gamePlaySound = new Audio("game_play.mp3");
// const gameOverSound = new Audio("game_over.wav");
// const gameTurnSound = new Audio("game-turn.mp3");
// const gameFoodEatingSound = new Audio("food_eating_sound.wav");
// let snakeSpeed =4;
// let snakeDirection = { x: 0, y: 0 };
// let snakePosition = [{ x: 9, y: 10 }];
// let snakePaintTime = 0;
// let score = 0;
// let foodDirectionA = 2;
// let foodDirectionB = 16;
// let foodDirection = { x: 5, y: 5 };

// function mainGame(a) {
//   window.requestAnimationFrame(mainGame);
//   if ((a - snakePaintTime) / 1000 < 1 / snakeSpeed) {
//     return;
//   }
//   snakePaintTime = a;
//   gameRunner();
// }

// function gameRunner() {
//   if (snakeCollide(snakePosition)) {
//     gameOverSound.play();
//     gameRunnerSound.pause();
//     snakeDirection = { x: 0, y: 0 };
//     snakeGamResult.style.display = "flex";
//     snakeGameResultGuideNess.textContent =
//       "Game Over. Press Enter to start again.";
//     return;
//   }

//   // Update snake position
//   for (let i = snakePosition.length - 2; i >= 0; i--) {
//     snakePosition[i + 1] = { ...snakePosition[i] };
//   }
//   snakePosition[0].x += snakeDirection.x;
//   snakePosition[0].y += snakeDirection.y;

//   if (
//     snakePosition[0].x === foodDirection.x &&
//     snakePosition[0].y === foodDirection.y
//   ) {
//     gameFoodEatingSound.play();
//     score++;
//     snakePosition.unshift({
//       x: snakePosition[0].x + snakeDirection.x,
//       y: snakePosition[0].y + snakeDirection.y,
//     });
//     foodDirection = {
//       x: Math.floor(
//         foodDirectionA + (foodDirectionB - foodDirectionA) * Math.random()
//       ),
//       y: Math.floor(
//         foodDirectionA + (foodDirectionB - foodDirectionA) * Math.random()
//       ),
//     };
//   }

//   // Clear and redraw the game board
//   snakeGameBoard.innerHTML = "";
//   snakePosition.forEach(function (b, c) {
//     let snake = document.createElement("div");
//     snake.classList.add("snakeIncreasing");
//     snakeGameBoard.appendChild(snake);
//     snake.style.gridRowStart = b.x;
//     snake.style.gridColumnStart = b.y;
//     if (c == 0) {
//       snake.classList.add("snakeTop");
//     }
//   });

//   let food = document.createElement("div");
//   food.classList.add("food");
//   food.style.gridRowStart = foodDirection.x;
//   food.style.gridColumnStart = foodDirection.y;
//   snakeGameBoard.appendChild(food);
// }

// function snakeCollide(snakePosition) {
//   // for (let i = 1; i < snakePosition.length; i++) {
//   //   if (
//   //     snakePosition[i].x === snakePosition[0].x &&
//   //     snakePosition[i].y === snakePosition[0].y
//   //   ) {
//   //     return true;
//   //   }
//   // }
//   // return (
//   //   snakePosition[0].x < 0 ||
//   //   snakePosition[0].x >= 18 ||
//   //   snakePosition[0].y < 0 ||
//   //   snakePosition[0].y >= 18
//   // );
// }

// window.requestAnimationFrame(mainGame);

// window.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     snakeGamResult.style.display = "none";
//     snakeDirection = { x: 0, y: 1 };
//     gameRunnerSound.play();
//   } else if (e.key === "ArrowUp" && snakeDirection.y === 0) {
//     snakeDirection = { x: 0, y: -1 };
//     gameTurnSound.play();
//   } else if (e.key === "ArrowDown" && snakeDirection.y === 0) {
//     snakeDirection = { x: 0, y: 1 };
//     gameTurnSound.play();
//   } else if (e.key === "ArrowLeft" && snakeDirection.x === 0) {
//     snakeDirection = { x: -1, y: 0 };
//     gameTurnSound.play();
//   } else if (e.key === "ArrowRight" && snakeDirection.x === 0) {
//     snakeDirection = { x: 1, y: 0 };
//     gameTurnSound.play();
//   }
// });

// // // let snake = document.querySelector(".snake");
// // // console.log(snake.clientLeft);

// // // snake.addEventListener("keyup", function (y) {
// // //   console.log(y);
// // // });
// // // function mover(u) {
// // //   // snake.style.top = clientY + "px";
// // //   console.log(u);
// // // }

// // // mover();
// // // let snakeY = snake.clientTop;
// // // let snakeX = snake.clientLeft;
// // // document.body.addEventListener("keydown", function (e) {
// // //   if (e.key === "ArrowUp") {
// // //     if (snakeY == 0) {
// // //       snake.style.top = "0%";
// // //       console.log("top 0");
// // //     } else {
// // //       snake.style.top = snakeY-- + "%";
// // //     }
// // //   } else if (e.key === "ArrowDown") {
// // //     if (snakeY == 95) {
// // //       snake.style.top = "95%";
// // //       console.log("top 95");
// // //     } else {
// // //       snake.style.top = snakeY++ + "%";
// // //     }
// // //   } else if (e.key === "ArrowLeft") {
// // //     if (snakeX == 0) {
// // //       snake.style.left = "0%";
// // //       console.log("left 95");
// // //     } else {
// // //       snake.style.left = snakeX-- + "%";
// // //     }
// // //   } else if (e.key === "ArrowRight") {
// // //     if (snakeX == 98) {
// // //       snake.style.left = "98%";
// // //       console.log("right 95");
// // //     } else {
// // //       snake.style.left = snakeX++ + "%";
// // //     }
// // //   }
// // // });

