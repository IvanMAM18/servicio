
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

	edge() {
		if(this.y - this.r <= 0 || this.y + this.r >= height){
			this.stepY *= -1;
			console.log('rebote');
		}

		if(this.x - this.r <= 0){
			this.reset();
			this.contadorIz++;
			console.log('salio Izquierda');
		}
		if(this.x + this.r >= width){
			this.reset();
			this.contadorDr++;
			console.log('salio Derecha');
		}
	}
	
	reset() {
		this.x = int(width / 2);
		this.y = int(height / 2);
		this.stepX = random([-1, 1]); // round(random()) * 2 - 1
		this.stepY = random([-1, 1]);
	}
}