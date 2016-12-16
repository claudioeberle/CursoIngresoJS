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

6)

function ventas{
	
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var importe5;
	var importe6;
	var importe7;
	var importe8;
	var importe9;
	var importe10;
	var importe11;
	var importe12;
	var importe13;
	var importe14;
	var importe15;
	var importe16;
	var importe17;
	var importe18;
	var importe19;
	var importe20;
	var importe21;
	var importe22;
	var importe23;
	var importe24;
	var maximo;
	var minimo;
	
	importe1=prompt("Ingrese importe de ventas dia 1");
	importe2=prompt("Ingrese importe de ventas dia 2");
	importe3=prompt("Ingrese importe de ventas dia 3");
	importe4=prompt("Ingrese importe de ventas dia 4");
	importe5=prompt("Ingrese importe de ventas dia 5");
	importe6=prompt("Ingrese importe de ventas dia 6");
	importe7=prompt("Ingrese importe de ventas dia 7");
	importe8=prompt("Ingrese importe de ventas dia 8");
	importe9=prompt("Ingrese importe de ventas dia 9");
	importe10=prompt("Ingrese importe de ventas dia 10");
	importe11=prompt("Ingrese importe de ventas dia 11");
	importe12=prompt("Ingrese importe de ventas dia 12");
	importe13=prompt("Ingrese importe de ventas dia 13");
	importe14=prompt("Ingrese importe de ventas dia 14");
	importe15=prompt("Ingrese importe de ventas dia 15");
	importe16=prompt("Ingrese importe de ventas dia 16");
	importe17=prompt("Ingrese importe de ventas dia 17");
	importe18=prompt("Ingrese importe de ventas dia 18");
	importe19=prompt("Ingrese importe de ventas dia 19");
	importe20=prompt("Ingrese importe de ventas dia 20");
	importe21=prompt("Ingrese importe de ventas dia 21");
	importe22=prompt("Ingrese importe de ventas dia 22");
	importe23=prompt("Ingrese importe de ventas dia 23");
	importe24=prompt("Ingrese importe de ventas dia 24");

	maximo=Math.max(importe1,importe2,importe3,importe4,importe5,importe6,importe7,importe8,importe9,importe10,importe11,importe12,importe13,importe14,importe15,importe16,importe17,importe18,importe19,importe20,importe21,importe22,importe24);

	minimo=Math.min(importe1,importe2,importe3,importe4,importe5,importe6,importe7,importe8,importe9,importe10,importe11,importe12,importe13,importe14,importe15,importe16,importe17,importe18,importe19,importe20,importe21,importe22,importe24);

	alert("El importe maximo es "+maximo+" y el importe minimo es "+minimo);

}//fin de funcion



7)


