var snake = document.querySelector(".snake");
console.log(snake);

// snake.addEventListener("keyup", function (y) {
//   console.log(y);
// });

document.body.addEventListener("keyup", function (e) {
  function mover(u) {
    snake.style.top = clientY + "px";
  }

  if (e.key === "ArrowUp") {
    mover();
    console.log("ArrowUp");
  } else if (e.key === "ArrowDown") {
    console.log("ArrowDown");
  } else if (e.key === "ArrowLeft") {
    console.log("ArrowLeft");
  } else if (e.key === "ArrowRight") {
    console.log("ArrowRight");
  }
});
