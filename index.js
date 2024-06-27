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
let highScore = 0;
let scoreSave;
let highScoreSave;
let foodDirectionA = 2;
let foodDirectionB = 16;
let foodDirection = { x: 5, y: 5 };
snakeGameScore.textContent = `Score: ${score}`;
snakeGameHighScore.textContent = `High Score: ${highScore}`;
let foodRandomColor;
let food = document.createElement("div");
function mainGame(a) {
  window.requestAnimationFrame(mainGame);
  if ((a - snakePaintTime) / 1000 < 1 / snakeSpeed) {
    return;
  }
  snakePaintTime = a;
  gameRunner();
}

function gameRunner() {
  if (
    snakePosition[0].x === foodDirection.x &&
    snakePosition[0].y === foodDirection.y
  ) {
    foodRandomColor = [
      Math.floor(Math.random() * 1000000),
      Math.floor(Math.random() * 200000),
    ];
    gameFoodEatingSound.play();
    score += 1;
    highScore += 1;
    snakeGameScore.textContent = `Score: ${score}`;
    snakeGameHighScore.textContent = `High Score: ${highScore}`;

    if (score <= 6 || highScore <= 6) {
      snakeSpeed = 6;
    } else if (score <= 12 || highScore <= 12) {
      snakeSpeed = 9;
    } else if (score <= 20 || highScore <= 20) {
      snakeSpeed = 14;
    } else if (score <= 30 || highScore <= 30) {
      snakeSpeed = 18;
    } else if (score <= 50 || highScore <= 50) {
      snakeSpeed = 25;
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
    food.style.background = `#${foodRandomColor[0]}`;
    food.style.boxShadow = `0px 0px 20px ${foodRandomColor[1]}`;
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

  food.classList.add("food");
  food.style.gridRowStart = foodDirection.x;
  food.style.gridColumnStart = foodDirection.y;
  snakeGameBoard.appendChild(food);

  scoreSave = localStorage.setItem("Score", JSON.stringify(score));
  highScoreSave = localStorage.setItem("HighScore", JSON.stringify(highScore));

  for (let e = 1; e < snakePosition.length; e++) {
    if (
      snakePosition[e].x === snakePosition[0].x &&
      snakePosition[e].y === snakePosition[0].y
    ) {
      snakeCollide();
    }
  }
  if (
    snakePosition[0].x < 0 ||
    snakePosition[0].x > 18 ||
    snakePosition[0].y < 0 ||
    snakePosition[0].y > 18
  ) {
    snakeCollide();
  }
}

function snakeCollide() {
  score = 0;
  snakeSpeed = 3;
  snakeGameScore.textContent = `Score: ${score}`;
  snakeGamResult.style.display = "flex";
  snakeGameResultGuideNess.textContent =
    "Game Over Press Enter To Again Start a Game";
  snakeDirection = { x: 0, y: 0 };
  snakePosition = [{ x: 8, y: 9 }];
  localStorage.setItem("HighScore", JSON.stringify(highScore));
}
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
