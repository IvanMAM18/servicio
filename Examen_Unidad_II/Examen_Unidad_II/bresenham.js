
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(225);
  bresenham(200,0,200,400);//Linea vertical
  bresenham(0,200,400,200);//Linea Horizontal
  bresenham(0,0,400,400);//Esquina superior izquierda
  bresenham(400,0,0,400);//Esquina superior derecha
}
function bresenham(x0, y0, x1, y1) {
  let dx = abs(x1 - x0);
  let dy = abs(y1 - y0);
  let sx = (x0 < x1) ? 1 : -1;
  let sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;
  
  while (x0 != x1 || y0 != y1) {
    point(x0, y0); // Dibuja el punto actual
    let e2 = err * 2;
    if (e2 > -dy) { // Si el error es mayor que -dy, mueve en dirección x
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) { // Si el error es menor que dx, mueve en dirección y
      err += dx;
      y0 += sy;
    }
  }
  point(x0, y0); // Dibuja el punto final
}