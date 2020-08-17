class Tile{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.tileSize = 16;
	}

  update(){
    
  }
  
  draw(ctx){
    //ctx.clearRect(this.x,this.y,this.w,this.h);
	  ctx.beginPath();
	  ctx.rect(this.x,this.y,this.w,this.h);
	  ctx.fillStyle = "#0066ff";
	  ctx.fill();
	  ctx.closePath();
  }
}

class Tilemap{
  constructor(){
    this.tileSize = 32;
    this.w = 512;
    this.h = 512;
    this.tiles = this.initTiles();
  }
  
  initTiles(){
    var tiles = [];
    for(var cols=0;cols<16;++cols){
      for(var rows=0;rows<16;++rows){
        var t = new Tile(cols*this.tileSize,rows*this.tileSize);
        t.id = "grass";
        if(cols <=2 && rows <= 8 && rows >= 4)t.id = "field";
        tiles.push(t);
      }
    }
    return tiles;
  }
  
  draw(){
    for(var i=0;i<this.tiles.length;++i){
      ctx.beginPath();
	    ctx.rect(this.tiles[i].x,this.tiles[i].y,this.tileSize,this.tileSize);
	    ctx.fillStyle = "#00ff10";
	    if(this.tiles[i].id == "field")ctx.fillStyle = "#ffff00";
	    ctx.fill();
	    ctx.closePath();
    }
  }
  
}