window.onload = function(){
    dibujar(0,0,300,300,0);
    dibujar(0,300,300,0,0);
    dibujar(150,300,150,0,0);
    dibujar(0,150,300,150,0);
};
function dibujar(ox, oy, dx, dy, x){
    var canvas =  document.getElementById('canvas');
    var ctx =  canvas.getContext('2d');
       ctx.beginPath();
       ctx.moveTo(ox, oy);
       ctx.lineTo(dx, dy);
       x == 0 ? ctx.strokeStyle = "#000" : x == 1 ? 
            ctx.strokeStyle = "rgba(255,0,0,0.2)" : ctx.strokeStyle = "rgba(0,0,255,0.2)"
       ctx.stroke();
}



