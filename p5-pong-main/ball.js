
class Ball {
	constructor() {
		this.r = 10;
		this.contadorIz=0;
		this.contadorDr=0;
		this.reset();

	}

	draw() {
		ellipse(this.x, this.y, this.r * 2);
	}

	move() {
		this.x += this.stepX;
		this.y += this.stepY;
	}

	edge(p1X,p1Y,p2X,p2Y) {
		if(this.y - this.r <= (p1Y+100) && this.x-this.r === (p1X+19)){
			console.log("tocoIz"+(p1Y+100)+"---"+(p1X+20)+"--"+(this.y+this.r)+"--"+(this.x+this.r));
			this.stepX *= -1;
		}
		if(this.y - this.r <= (p2Y+100) && this.x-this.r === (p2X-20)){
			console.log("tocoDr"+(p1Y+100)+"---"+(p1X+20)+"--"+(this.y+this.r)+"--"+(this.x+this.r));
			this.stepX *= -1;
		}
		if(this.y - this.r <= 0 || this.y + this.r >= height ){
			this.stepY *= -2;
			console.log('rebote');
		}
		if(this.x - this.r <= 0){
			console.log('salio Izquierdaaaa ---'+(p1Y+100)+"--"+(p1X+20)+"---yr: "+(this.y+this.r)+"---xr: "+(this.x+this.r));
			this.reset();
			this.contadorIz++;
		}
		if(this.x + this.r >= width){
			this.reset();
			this.contadorDr++;
			console.log('salio Derechaaaa---'+(p2Y+100));
		}
	}
	
	reset() {
		this.x = int(width / 2);
		this.y = int(height / 2);
		this.stepX = random([-2, 1]); // round(random()) * 2 - 1
		this.stepY = random([-2, 1]);
	}
}