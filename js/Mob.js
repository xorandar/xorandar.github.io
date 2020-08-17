class Mob{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.s = 32;
	}

  detectCollision(entity){
    if(this.x <= entity.x+entity.s && this.x + this.s >= entity.x){
      if(this.y <= entity.y+entity.s && this.y + this.s >= entity.y){
        this.moving = false;
        this.targetX = this.x;
        this.targetY = this.y;
      }
    }
  }
  
  move(){ //called from update if clicked location isn't current location
    if(this.targetX >= this.x){
      this.x += 1;
    }
    if(this.targetX <= this.x){
      this.x -=1;
    }
    if(this.targetY >= this.y){
      this.y += 1;
    }
    if(this.targetY <= this.y){
      this.y -=1;
    }
  }
  
  update(tilemap){
    for(var i=0;i<tilemap.length;++i){
      this.detectCollision(tilemap[i]);
    }
    if(this.moving == true) this.move();
  }
  
  draw(ctx){
    //ctx.clearRect(this.x,this.y,this.w,this.h);
	  ctx.beginPath();
	  ctx.rect(this.x,this.y,this.s,this.s);
	  ctx.fillStyle = "#0066ff";
	  ctx.fill();
	  ctx.closePath();
  }
  
  
}