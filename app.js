const canvas = document.querySelector("canvas");

//context (ctx) 는 기본적으로 붓(브러쉬)다
const ctx = canvas.getContext("2d");

//선을 그릴때 canvas에서의 이미지 퀄리티를 높이기위해 css중 width,height의 수정은 자바스크립트에서만 한다.
canvas.width = 800;
canvas.height = 800;

//fillRect 메소드 : x,y,width,height
ctx.fillRect(50, 50, 100, 200);
