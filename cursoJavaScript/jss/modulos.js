
//import manda llamar otros JS de la carpeta, llama entre corchetes lo que se desee ver de variable exportada o funcion o clase
import saludar,{Saludar,PI} from "./constantes.js";
import{aritmetica as calculos} from "./aritmetica.js";//as crea un alias del js mandado a llamar

console.log(`Archivo modulos.js ${PI}`);
//console.log(aritmetica.sumar(1,2));
console.log(calculos.sumar(1,2));

saludar();
let saludo = new Saludar();
saludo;