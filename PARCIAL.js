PARCIAL INGRESO

NIVEL1

1)
function perimetro{
	
	var base;
	var perimetro;

	base=document.getElementById('base').value;

	perimetro=base*4;

	alert(perimetro);
	
}// fin funcion

2)
function precio{
	
	var precio;
	var iva;
	var precioFinal;

	precio=prompt("Por favor ingrese el precio del producto");

	iva=21/100;

	precioFinal=precio*iva;

	document.getElementById('mostrar').value=precioFinal;

}//fin funcion

3)
function alambrado{
	
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	alambre=(largo*2+ancho*2)*3

	alert("Se precisan "+alambre+" mts de alambre");

}//fin funcion

NIVEL 2

4)
function IF{
	
	var numeroUno;
	var numeroDos;
	var multiplicar;
	var restar;
	var sumar;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese otro numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos){

		multiplicar=numeroUno*numeroDos;
		document.write(multiplicar);
	}//if

	else{

		if(numeroUno>numeroDos){

			restar=numeroUno-numeroDos;
			document.write(restar);

		}//if2
		else{

			sumar=numeroUno+numeroDos;
			document.write(sumar);

		}//else2


	}//else


}//fin funcion

5)

function switch{
	
	var dia;

	dia=prompt("Ingresar un dia de semana");

	switch(dia){

		case "Sabado":
		case "Domingo":
		alert("Fin de semana");
		break;

		default:
		alert("A trabajar");
		break;

	}//switch

}//fin de funcion

NIVEL 3



	maximo=Math.max(importe1,importe2,importe3,importe4,importe5,importe6,importe7,importe8,importe9,importe10,importe11,importe12,importe13,importe14,importe15,importe16,importe17,importe18,importe19,importe20,importe21,importe22,importe24);

	minimo=Math.min(importe1,importe2,importe3,importe4,importe5,importe6,importe7,importe8,importe9,importe10,importe11,importe12,importe13,importe14,importe15,importe16,importe17,importe18,importe19,importe20,importe21,importe22,importe24);

	alert("El importe maximo es "+maximo+" y el importe minimo es "+minimo);

}//fin de funcion






