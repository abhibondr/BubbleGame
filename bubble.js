var timer = 60;
var score = 0;
var hitNo;

function myBubble() {
  let clutter = "";
  for (var i = 0; i <= 165; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
    document.querySelector("#btmPanel").innerHTML = clutter;
  }
}

function myTimer() {
  let cutTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(cutTimer);
      document.querySelector("#btmPanel").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}

function myHit() {
  hitNo = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitNo;
}

function myScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#btmPanel").addEventListener("click", (details) => {
  let clickValue = Number(details.target.textContent);
  if (hitNo === clickValue) {
    myScore();
    myHit();
    myBubble();
  }
});

myBubble();
myTimer();
myHit();
myScore();
