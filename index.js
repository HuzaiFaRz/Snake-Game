var snake = document.querySelector(".snake");
// console.log(snake.clientLeft);

// snake.addEventListener("keyup", function (y) {
//   console.log(y);
// });
// function mover(u) {
//   // snake.style.top = clientY + "px";
//   console.log(u);
// }

// mover();
var snakeY = snake.clientTop;
var snakeX = snake.clientLeft;
document.body.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    if (snakeY == 0) {
      snake.style.top = "0%";
      console.log("top 0");
    } else {
      snake.style.top = snakeY-- + "%";
    }
  } else if (e.key === "ArrowDown") {
    if (snakeY == 95) {
      snake.style.top = "95%";
      console.log("top 95");
    } else {
      snake.style.top = snakeY++ + "%";
    }
  } else if (e.key === "ArrowLeft") {
    if (snakeX == 0) {
      snake.style.left = "0%";
      console.log("left 95");
    } else {
      snake.style.left = snakeX-- + "%";
    }
  } else if (e.key === "ArrowRight") {
    if (snakeX == 98) {
      snake.style.left = "98%";
      console.log("right 95");
    } else {
      snake.style.left = snakeX++ + "%";
    }
  }
});
