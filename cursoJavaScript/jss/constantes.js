export const PI = Math().PI;//Se exporta una variable a otro JS

let usuario="Ivan";
let password="eeee";

export default function saludar() { //export default solo se puede llamar una vez, sin llamarlo con import, si se desea hacerlo con una variable primero se llama la variables y despues se exporta
    console.log("Hola Modulos +ES6");
}

export  class Saludar{
    constructor(){
        console.log("Hola Modulos +ES6");
    }
}