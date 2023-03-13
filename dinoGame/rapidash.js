class Rapidash{
    constructor(img){
        this.img = img;
		this.x = 0;
		this.s=100;
        this.y=height - this.s;
    }
    draw(){
        noFill();
        rect(this.x,this.y,this.s,this.s);
        image(this.img, this.x, this.y, this.s, this.s);
    }
}