function boton(){
    var cantidad = parseInt(document.getElementById("rebanadas").value);
    var respuesta = document.getElementById("respuesta");
    respuesta.innerHTML=cantidad;
    console.log(cantidad);

}
function puntoMedioCirculo(xc, yc, r) {
    let x = 0;
    let y = r;
    let p = 1 - r;
  
    trazarSimetricos(xc, yc, x, y);
  
    while (x < y) {
      x++;
      if (p < 0) {
        p += 2 * x + 1;
      } else {
        y--;
        p += 2 * (x - y) + 1;
      }
      trazarSimetricos(xc, yc, x, y);
    }
  }
  
  function trazarSimetricos(xc, yc, x, y) {
    point(xc + x, yc + y);
    point(xc - x, yc + y);
    point(xc + x, yc - y);
    point(xc - x, yc - y);
    point(xc + y, yc + x);
    point(xc - y, yc + x);
    point(xc + y, yc - x);
    point(xc - y, yc - x);
    point(xc,yc);
  }
  
  function setup() {
    createCanvas(1200, 600);
    background(220);
    puntoMedioCirculo(200, 300, 100);
    puntoMedioCirculo(500, 300, 100);
    puntoMedioCirculo(800, 300, 100);
  }