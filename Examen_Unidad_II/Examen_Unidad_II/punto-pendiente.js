
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  stroke(0);
  strokeWeight(2);
  puntoPendiente(200,0,199,400);//Linea vertical
  puntoPendiente(0,200,400,200);//Linea horizontal
  puntoPendiente(400,0,0,400);//Esquina superior derecha
  puntoPendiente(0,0,400,400);//Esquina superior izquierda
}


function puntoPendiente(x1,y1,x2,y2) {
  let dx = x2 - x1; 
  let dy = y2 - y1;
  let m = dy / dx;
  let b = y1 - m * x1;
  
  if(abs(dx) > abs(dy)) {
    // línea más horizontal
    for(let x = x1; x <= x2; x++) {
      let y = Math.round(m * x + b);
      point(x, y);
    }  
  } else {
    // línea más vertical
    
    for(let y = y1; y <= y2; y++) {
        let x = Math.round((y - b) / m);
      point(x, y);
    }
  }
}