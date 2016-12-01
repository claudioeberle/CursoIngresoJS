/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

/*	
var porcentaje;
var precio=100;
var aumento;
var precioFinal;

aumento=precio *0.21;
precioFinal=precio+aumento;
*/

/*
ESTA SERÍA UNA SEGUNDA OPCION PARA AHORRAR LA VARIABLE AUMENTO:

precioFinal=precio*1.21;
*/

var precio;
var aumento;
var precioFinal;

precio= document.getElementById('sueldo').value;
aumento= precio *400/100;
precio= parseInt(precio);
aumento= parseInt(aumento);
precioFinal= precio+aumento;
document.getElementById('resultado').value =precioFinal;
}
