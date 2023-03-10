const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("erase-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
); // 아래에서 forEach 함수를 사용하기위해 배열로 만들어준다(forEach는 배열에서 동작하기 때문이다.)
const color = document.getElementById("color");

const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");

//context (ctx) 는 기본적으로 붓(브러쉬)다
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

//선을 그릴때 canvas에서의 이미지 퀄리티를 높이기위해 css중 width,height의 수정은 자바스크립트에서만 한다.
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.color = color.value;
ctx.lineWidth = lineWidth.value; // 선 굵기 설정하기. lineWidth.value 값으로 굵기가 설정된다.
// ctx.moveTo(200, 200); // 선 시작점.
// ctx.lineTo(400, 400); // 선 끝점.
// ctx.stroke(); // 선 나타내기

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    //여기서 isPainting 는 자동적으로 true이다.
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  } //! if문으로 return 하고 나면 ctx.moveTo가 불필요하게 실행되지 않는다 == if문으로 return 먼저하지 않으면 moveTo가 항상 동작하기 때문에, if문을 먼저 작성한다.
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath(); //! 꼭 추가해주어야 사용자가 이전에 그린것까지 바꾸지 않는다.
}
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value; // strokeStyle 선의 스타일 (색상)을 담당.
  ctx.fillStyle = event.target.value; // fillStyle 도형의 스타일을 담당.
}

function onColorClick(event) {
  console.dir(event.target.dataset.color);
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue; // strokeStyle 선의 스타일 (색상)을 담당.
  ctx.fillStyle = colorValue; // fillStyle 도형의 스타일을 담당.
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "그리기 모드";
  } else {
    isFilling = true;
    modeBtn.innerText = "배경 채우기";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  onModeClick();
}

function onEraseClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "지우개 모드";
}

function onFileChange(event) {
  console.dir(event.target);
  const file = event.target.files[0];
  const url = URL.createObjectURL(file); // 브라우저의 메모리에서 그 파일의 url 만 얻어오기.
  const image = new Image(); // 의 뜻은 html에서 <img srt=""/> 을 쓰는 것과 같음.
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

// canvas.onmousemove = function onMove(){} 는 canvas.addEventListener("mousemove", onMove); 와 같다.  addEventListener 를 사용하면 이벤트안에 많은 이벤트리스너를 추가 할 수 있고, 같은 이벤트내에서 이벤트리스너들를 삭제할 수 있다.

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

// console.log(colorOptions);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraseClick);
fileInput.addEventListener("change", onFileChange);

// 레인보우 선  그리기 =====
// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   "#18dcff",
//   "#7d5fff",
// ];

// let num = 1000;

// function onClick(event) {
//   ctx.beginPath(); // beginPath 를 추가해서 onClick함수가 실행될 때마다 새로운 path를 만들어준다 == 이전 path에 영향 받지 않기위함.
//   const randomNumber = Math.random() * num;
//   ctx.moveTo(randomNumber, 400); //moveTo를 추가하면 최초 실행 클릭시 더블 클릭을 안해도 된다.
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke(); // stroke를 추가해 주어야 선이 그려진다.
// }

// canvas.addEventListener("mousemove", onClick);
// ===== 레인보우 선  그리기

//토르소 그리기 =====
// ctx.fillRect(210 - 40, 200 - 20, 15, 100);
// ctx.fillRect(350 - 40, 200 - 20, 15, 100);
// ctx.fillRect(260 - 40, 200 - 20, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI); //원 만들기
// ctx.fill();

// ctx.beginPath(); //새로운 도형을 만들때 추가한다.
// ctx.fillStyle = "white";
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "tomato";
// ctx.arc(250, 100, 20, 0, 1 * Math.PI);
// ctx.fill();
//======토르소 그리기

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// // ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// //moveTo 해당 위치로 시작점을 옮긴다.
// ctx.moveTo(50, 50);
// //lineTo 해당 위치까지 선을 그린다.
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

// // //fillRect 메소드 : x,y,width,height ++ strokeRect를 사용하면 테두리만 있는 사각형을 만듬.
// // ctx.rect(50, 50, 100, 100);
// // ctx.rect(150, 150, 100, 100);
// // ctx.rect(250, 250, 100, 100);
// // ctx.fill();
// // //beginPath 이전 경로를 종료하고 새로운 경로를 시작함.
// // ctx.beginPath();
// // ctx.rect(350, 350, 100, 100);
// // ctx.rect(450, 450, 100, 100);
// // ctx.fillStyle = "red";
// // setTimeout(() => {
// //   ctx.fill();
// // }, 3000);
