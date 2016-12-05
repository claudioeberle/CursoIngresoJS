function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta=="si"){

		contador++;
		numero=prompt("Ingrese el número");
		acumulador= acumulador+parseInt(numero);
		respuesta=prompt("¿Desea continuar?: si/no");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN