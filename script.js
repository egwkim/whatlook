let width, height;

const leftEye = document.getElementById("eye-left");
const rightEye = document.getElementById("eye-right");
const eyes = [leftEye, rightEye];
const question = document.querySelector(".question");
const whatlook = document.getElementById("whatlook");
const leftEye2 = document.querySelector("#eye-left>.eye1>.eye2");
const rightEye2 = document.querySelector("#eye-right>.eye1>.eye2");

let questionWidth, questionHeight;
let eye2Size;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  questionWidth = question.clientWidth;
  questionHeight = question.clientHeight;
  eyes.forEach((eye) => {
    eye.style.width = questionWidth + "px";
    eye.style.height = questionHeight + "px";
  });
  whatlook.style.top = (height - questionHeight) / 2 + "px";

  eye2Size = leftEye2.clientHeight;
}

window.onresize = resize;

resize();

let cursorXRatio = 0.75;
let cursorYRatio = 0.75;

function moveEye() {
  leftEye2.style.left = cursorXRatio * (questionWidth - eye2Size) + "px";
  leftEye2.style.top = cursorYRatio * (questionHeight - eye2Size) + "px";
  rightEye2.style.left = cursorXRatio * (questionWidth - eye2Size) + "px";
  rightEye2.style.top = cursorYRatio * (questionHeight - eye2Size) + "px";
}

document.addEventListener("pointermove", (e) => {
  cursorXRatio = e.clientX / width;
  cursorYRatio = e.clientY / height;
  moveEye();
});
