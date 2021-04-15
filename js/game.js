var ctx = mainCanvas.getContext("2d");
var canvasColor = "#336D39";
var cellSize = 128;
var gameState,player;


function init(){
    player = new Entity("player", 200,300,cellSize,cellSize);
    gameState = "start";
}

function update(){
    player.update();
	requestAnimationFrame(update);
}

function draw(){
	ctx.fillStyle = canvasColor;
	ctx.fillRect(0,0,mainCanvas.width,mainCanvas.height);
	player.draw();
	requestAnimationFrame(draw);
}


init();
update();
draw();
