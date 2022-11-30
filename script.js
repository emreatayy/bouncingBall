var timer;
var marginTop = 550;
bottom2Top = true;
var maxJump = 0;

function bounce() {
  timer = setInterval(function () {
    action();
  }, 80);
}

function action() {
  if (maxJump == 550) {
    clearInterval(timer);
    ball.style.marginTop = 550 + "px";
  }
  var ball = document.getElementById("ball");
  if (bottom2Top) {
    marginTop -= 50;
  } else {
    marginTop += 50;
  }
  ball.style.marginTop = marginTop + "px";
  if (marginTop == maxJump) {
    bottom2Top = false;
  }
  if (marginTop == 550) {
    maxJump += 50;
    bottom2Top = true;
  }
}
