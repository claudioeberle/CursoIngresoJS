function Mostrar()
{

	var importe;
	var dias=0;
	var mayor;
	var menor;

	while(dias<24){

		importe=prompt("Ingrese importe de ventas");
		dias++;
		importe=parseInt(importe);

		while(importe<=0) {

			importe=prompt("Ingrese importe de ventas");
			importe=parseInt(importe);

		}//while

	console.log(importe);

	if(dias==1) {


		menor=importe;
		mayor=importe;
	}

	else{

		if(importe<menor){

			menor=importe;
		}

		if(importe>mayor){

			mayor=importe;
		}

	}
	
	}//while1



	

	document.write("El mayor importe es "+mayor+" y el menor importe es "+menor);


}//FIN DE LA FUNCIÓN