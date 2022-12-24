const canvas = document.querySelector("canvas");

//context (ctx) 는 기본적으로 붓(브러쉬)다
const ctx = canvas.getContext("2d");

//선을 그릴때 canvas에서의 이미지 퀄리티를 높이기위해 css중 width,height의 수정은 자바스크립트에서만 한다.
canvas.width = 800;
canvas.height = 800;

//fillRect 메소드 : x,y,width,height ++ strokeRect를 사용하면 테두리만 있는 사각형을 만듬.
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();
//beginPath 이전 경로를 종료하고 새로운 경로를 시작함.
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
setTimeout(() => {
  ctx.fill();
}, 3000);
