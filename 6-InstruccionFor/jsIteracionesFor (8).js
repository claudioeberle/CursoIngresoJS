function Mostrar()
{

	/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

	var numero;
	var continua="1";
	var acumulador=0;
	var pares=0;
	var max;
	var min;

	acumulador=parseInt(acumulador);

	while(continua=="1"){

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		console.log(numero);

		
		while(numero<0){

			alert("El número no puede ser negativo");
			numero=prompt("Re-ingrese un numero");
			numero=parseInt(numero);

			console.log(numero);

		}//while2

		continua=prompt("Para terminar ingrese 0 o para cotinuar ingrese 1");

		acumulador=acumulador+numero;

		if(numero%2==0){

			pares++;

		}//if pares

		if (cotinua=="1"){

			max=numero



		}



	}//while1

	}//while contador


	document.write(

	"La suma total es: "+acumulador+
	"La cantidad de números pares es: "+pares+



		);

	//a NUMEROS PARES


}//FIN DE LA FUNCIÓN