function setup() {
createCanvas(400, 400);
}

function draw() {
  background(225);
  drawLine(200,0,200,400);//Linea vertical
  drawLine(0,200,400,200);//Linea horizontal
  drawLine(0,0,400,400);//Esquina superior derecha
  drawLine(400,0,0,400);//Esquina superior izquierda
}
function drawLine(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let m = dy / dx; // Calcula la pendiente

  if (abs(dx) > abs(dy)) { // Si la pendiente es menor que 1
    let y = y1;
    for (let x = x1; x <= x2; x++) { // Camina sobre el eje x
      point(x, y); // Dibuja el punto
      y += m; // Avanza sobre el eje y
    }
  } else { // Si la pendiente es mayor o igual que 1
    let x = x1;
    for (let y = y1; y <= y2; y++) { // Camina sobre el eje y
      point(x, y); // Dibuja el punto
      x += 1 / m; // Avanza sobre el eje x
    }
  }
}