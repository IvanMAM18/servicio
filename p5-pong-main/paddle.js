class Paddle {
	constructor(x,y,pd) {
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 100;
		this.pd = pd;
	}

	draw() {
		rect(this.x, this.y, this.w, this.h);
	}
	movimiento(){
		if((this.y+this.h) === (height+2)){
			this.y = this.y-5;
		}
		if(this.y === 0){
			this.y=this.y+5;
		}
		if (keyIsDown(87) && this.pd==='p1') {
			this.y -= 5;
		}
		if (keyIsDown(83) && this.pd==='p1') {
			this.y += 5;
		}
		if (keyIsDown(UP_ARROW) && this.pd==='p2') {
			this.y -= 5;
		}
	
		if (keyIsDown(DOWN_ARROW) && this.pd==='p2') {
			this.y += 5;
		}
	}
}