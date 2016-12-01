function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var miRandom;
	
	miRandom= Math.floor((Math.random() * 11) + 1);


	if (miRandom>=9) {

		alert("EXCELENTE");
	}//IF 9 O 10

	else {	if (miRandom<9 && miRandom>4) {

			alert("APROBÓ");

			}//IF 8-5
			
			else {alert("VAMOS, LA PRÓXIMA SE PUEDE");}

		 }//ELSE IF

		
	
}//FIN DE LA FUNCIÓN