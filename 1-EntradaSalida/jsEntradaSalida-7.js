/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
var numeroUno;
var numeroDos;
var suma;

numeroUno= document.getElementById('numeroUno').value;
numeroDos= document.getElementById('numeroDos').value;
numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
suma= numeroUno+numeroDos;

alert("La suma es: "+suma);
}

/*LA SUMA NO SOLO SUMA SINO QUE TB CONTATENA. 
ES POR ESTO QUE HAY QUE USAR EL PARSEINT.
POR ESO NO ES NECESARIO PARA EL RESTO DE LAS OPERACIONES
MATEMÁTICAS: RESTA, MULTIPL, DIVIDIR*/

function restar()
{
var numeroUno;
var numeroDos;
var resta;

numeroUno= document.getElementById('numeroUno').value;
numeroDos= document.getElementById('numeroDos').value;
resta= numeroUno-numeroDos;

alert("La resta es: "+resta);
}

function multiplicar()
{ 
var numeroUno;
var numeroDos;
var multiplicar;

numeroUno= document.getElementById('numeroUno').value;
numeroDos= document.getElementById('numeroDos').value;
multiplicar= numeroUno*numeroDos;

alert("La multiplicación es: "+multiplicar);
	
}

function dividir()
{
	
var numeroUno;
var numeroDos;
var dividir;

numeroUno= document.getElementById('numeroUno').value;
numeroDos= document.getElementById('numeroDos').value;
dividir= numeroUno/numeroDos;

alert("La división es: "+dividir);
}

