/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var numeroUno;
var numeroDos;
var suma;

/*Si escribo numeroUno=33 (son números) 
si escribo numeroUno="33" es palabra
pero el alert me lo va a tomar como texto*/

numeroUno= document.getElementById('numeroUno').value;
numeroDos= document.getElementById('numeroDos').value;
numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
/*parseInt me convierte los valores en NÚMEROS"*/
suma= numeroUno+numeroDos;


alert("La suma es: "+suma);

}

