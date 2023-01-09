const canvas = document.querySelector("canvas");

//context (ctx) 는 기본적으로 붓(브러쉬)다
const ctx = canvas.getContext("2d");

//선을 그릴때 canvas에서의 이미지 퀄리티를 높이기위해 css중 width,height의 수정은 자바스크립트에서만 한다.
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

let num = 1000;

function onClick(event) {
  ctx.beginPath(); // beginPath 를 추가해서 onClick함수가 실행될 때마다 새로운 path를 만들어준다 == 이전 path에 영향 받지 않기위함.
  const randomNumber = Math.random() * num;
  ctx.moveTo(randomNumber, 400); //moveTo를 추가하면 최초 실행 클릭시 더블 클릭을 안해도 된다.
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke(); // stroke를 추가해 주어야 선이 그려진다.
}

canvas.addEventListener("mousemove", onClick);
