const canvas = document.querySelector("canvas");

//context (ctx) 는 기본적으로 붓(브러쉬)다
const ctx = canvas.getContext("2d");

//선을 그릴때 canvas에서의 이미지 퀄리티를 높이기위해 css중 width,height의 수정은 자바스크립트에서만 한다.
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI); //원 만들기
ctx.fill();

ctx.beginPath(); //새로운 도형을 만들때 추가한다.
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "tomato";
ctx.arc(250, 100, 20, 0, 1 * Math.PI);
ctx.fill();

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
