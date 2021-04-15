class Box{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = "#000000";
		this.fullStr = "Blank, but not really blank, this string is supposed to be super uber long, wtf, i don't think i can do it, jeez. What can i fill this with, how will i know if i've reached 196 characters? oh man oh man oh man jeez.";
		this.textSpeed = 50;
	}

  
    update(){
        
    }
    
  
    
    draw(ctx){
	    ctx.beginPath();
	    ctx.rect(this.x,this.y,this.w,this.h);
	    ctx.fillStyle = "#E6DBB7";
	    ctx.fillRect(this.x,this.y,this.w,this.h);
	    ctx.closePath();
	    ctx.font = "32px Arial";
	    ctx.fillStyle = "#000000";
	    ctx.fillText(this.fullStr, this.x+24, this.y+(40*2));
	    
    }
}
