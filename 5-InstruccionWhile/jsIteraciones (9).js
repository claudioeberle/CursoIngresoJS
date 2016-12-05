function Mostrar()
{

	var contador=0;
	var minimo;
	var maximo;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;

		numero=prompt("Ingrese el número");
		numero=parseInt(numero);	

			if(contador==1){
				//defino variables
				maximo=numero;
				minimo=numero;
			}//if
			else{

			if(numero<minimo){

				minimo=numero;
			}//if
			if(numero>maximo){

				maximo=numero;
			}//if
		

			}//else
			

		respuesta=prompt("Para terminar escriba: no ");

	}//while

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN