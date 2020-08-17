var mainCanvas = document.getElementById("mainCanvas");
var ctx = mainCanvas.getContext("2d");
var goat;
var tMap = [];

function getMousePosition(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  goat.targetX = event.clientX - rect.left; 
  goat.targetY = event.clientY - rect.top; 
  console.log("Coordinate x: " + goat.targetX, "Coordinate y: " + goat.targetY);
  if(goat.x != goat.targetX && goat.y != goat.targetY) goat.moving = true;
  } 
      
  mainCanvas.addEventListener("mousedown", function(e){ 
    getMousePosition(mainCanvas, e); 
  });


function init(){
  tMap = new Tilemap();
	goat = new Mob(0,0);
}

function update(){
	goat.update(tMap);
	requestAnimationFrame(update);
}

function draw(){
	ctx.clearRect(0,0,mainCanvas.width,mainCanvas.height);
	tMap.draw(ctx);
	goat.draw(ctx);
	requestAnimationFrame(draw);
}



init();
update();
draw();
