const snakeGamResult = document.querySelector(".game-result");
const snakeGameResultGuideNess = document.querySelector(".guide");
const snakeGameBoard = document.querySelector(".snake-game");
const snakeGameScore = document.querySelector(".score");
const snakeGameHighScore = document.querySelector(".high-score");
const gameRunnerSound = new Audio("game_runnner.mp3");
const gamePlaySound = new Audio("game_play.mp3");
const gameOverSound = new Audio("game_over.wav");
const gameTurnSound = new Audio("game-turn.mp3");
const gameFoodEatingSound = new Audio("food_eating_sound.wav");
let snakeSpeed = 3;
let snakeDirection = { x: 0, y: 0 };
let snakePosition = [{ x: 8, y: 9 }];
let snakePaintTime = 0;
let score = 0;
let highscore = 0;
let foodDirectionA = 2;
let foodDirectionB = 16;
let foodDirection = { x: 5, y: 5 };
snakeGameScore.textContent = `Score: ${score}`;
snakeGameHighScore.textContent = `High Score: ${highscore}`;
function mainGame(a) {
  window.requestAnimationFrame(mainGame);
  if ((a - snakePaintTime) / 1000 < 1 / snakeSpeed) {
    return;
  }
  snakePaintTime = a;
  gameRunner();
}

function gameRunner() {
  if (snakeCollide()) {
    gameOverSound.play();
    gameRunnerSound.pause();
    snakeDirection = { x: 0, y: 0 };
    snakeGamResult.style.display = "flex";
    snakeGameResultGuideNess.textContent =
      "Game Over Press Any Enter To Again Start a Game";
  }

  if (
    snakePosition[0].x === foodDirection.x &&
    snakePosition[0].y === foodDirection.y
  ) {
    gameFoodEatingSound.play();
    score += 1;
    highscore += 1;
    snakeGameScore.textContent = `Score: ${score}`;
    snakeGameHighScore.textContent = `High Score: ${highscore}`;
    if (score <= 6 || highscore <= 6) {
      snakeSpeed = 6;
      console.log(snakeSpeed);
    } else if (score <= 12 || highscore <= 12) {
      snakeSpeed = 9;
      console.log(snakeSpeed);
    } else if (score <= 20 || highscore <= 20) {
      snakeSpeed = 14;
      console.log(snakeSpeed);
    } else if (score <= 30 || highscore <= 30) {
      snakeSpeed = 18;
      console.log(snakeSpeed);
    } else if (score <= 50 || highscore <= 50) {
      snakeSpeed = 25;
      console.log(snakeSpeed);
    } else {
      snakeSpeed = 3;
    }

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
function snakeCollide() {}

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gameRunnerSound.play();
    gameRunnerSound.addEventListener("ended", function () {
      gameRunnerSound.play();
    });

    snakeGamResult.style.display = "none";

    snakeDirection = { x: 0, y: 0 };
  } else if (e.key === "ArrowUp") {
    gameTurnSound.play();
    snakeDirection = { y: 0, x: -1 };
  } else if (e.key === "ArrowDown") {
    gameTurnSound.play();
    snakeDirection = { y: 0, x: 1 };
  } else if (e.key === "ArrowLeft") {
    gameTurnSound.play();
    snakeDirection = { y: -1, x: 0 };
  } else if (e.key === "ArrowRight") {
    gameTurnSound.play();
    snakeDirection = { y: 1, x: 0 };
  } else {
    return false;
  }
});
window.requestAnimationFrame(mainGame);

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
