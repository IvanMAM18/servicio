/*
1.- Crear carpeta vacia
2.- En terminar situado en la carpeta creada, poner el comando npm init para crear 
archivos a utilizar, siguiendo todos los pasos y darle siguiente a todos excepto la description, author
3.- Instalar con node paquete de excel, con el comando npm install xlsx
4.- Ya en la carpeta crear una carpeta src con un archi js
var txt = document.getElementById("txt");
txt.innerHTML="cdcdcedcddcedccdfvdfvefvffvfvf";
console.log(txt.innerHTML);
*/


var XLSX = require("xlsx");
const ExcelAJSON = () => {
    const excel = XLSX.readFile(
       "/Applications/MAMP/htdocs/servicio/excelAJson/cajas.xlsx"
    );
    var nombreHoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos);
};
ExcelAJSON();
