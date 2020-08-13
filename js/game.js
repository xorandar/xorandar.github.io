var mainCanvas = document.getElementById("mainCanvas");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;
var ctx = mainCanvas.getContext("2d");
var x = 0;


function init(){
	
}

function update(){
	x += 1;
	requestAnimationFrame(update);
}

function draw(){
	ctx.clearRect(0,0,mainCanvas.width,mainCanvas.height);
	ctx.beginPath();
	ctx.rect(x,0,mainCanvas.width/2,mainCanvas.height/2);
	ctx.fillStyle = "#ff0000";
	ctx.fill();
	ctx.closePath();
	requestAnimationFrame(draw);
}

init();
update();
draw();
