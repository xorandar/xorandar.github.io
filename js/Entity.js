class Entity{
	constructor(id,x,y,w,h){
	    this.id = id;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.image = new Image();
		this.image.src=findIMG(id);
		this.inventory = new Inventory();
		//this.image.src="img/player.png"
		this.origin = [this.x,this.y];
		this.destReached=false;
	}
	
	attack(){
	    console.log("attack mf")
	}
	
	setOrigin(){//called on changeState() in 'functions.js'
	    switch(gameState){ //sets sprite location in game window
            case "main":
                this.origin[0] = 256;
                this.origin[1] = 320;
            break;
            case "adv":
                this.origin[0] = 256;
                this.origin[1] = 256;
            break;
            case "inv":
                this.origin[0] = 1000;
                this.origin[1] = 1000;
            break;
	    }
	    this.x = this.origin[0]-this.w/2; //centers sprite at origin
	    this.y = this.origin[1];-this.h/2;
	}
	
	move(h,r1,r2,speed){ //h = horizontal movement
	    if(h===true){ //r1=right/down move range|r2=left/up range
	        if(this.x > this.origin[0]+r1)this.destReached=true;
            if(this.x < this.origin[0]-r2)this.destReached=false;
            if(this.destReached == false)this.x += speed;
            if(this.destReached == true)this.x -=speed;
        }
        if(h===false){
            if(this.y > this.origin[1]+r1)this.destReached=true;
            if(this.y < this.origin[1]-r2)this.destReached=false;
            if(this.destReached == false)this.y += speed;
            if(this.destReached == true)this.y -=speed;
        }
	}
	
	movementPattern(){
        switch(gameState){
            case "start":
            case "main":
                this.move(true,0,0,0)
            break;
            case "adv":
                this.move(false,0,4,0.30)
            break;
            case "inv":
                this.move(false,0,0,0)
            break;
        }
    }


    update(){ //animation changes depending on gameState
        this.movementPattern()
    }

    
    
    draw(){
	    ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
}
