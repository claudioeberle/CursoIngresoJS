/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	contadorIntentos=0;
	numeroSecreto= Math.floor((Math.random() * 100) + 1);
	

}

function verificar()
{

	var numeroIngresado;

	contadorIntentos= contadorIntentos+1;
	console.log("el contador: "+contadorIntentos);
	document.getElementById('intentos').value=contadorIntentos;
	numeroIngresado= document.getElementById('numero').value;

		if (numeroIngresado==numeroSecreto) {

			alert("¡GANO!");
			//APTITUDES
			if (contadorIntentos>10){ 
				alert("¡Afortunado en el amor!");
			} //>10
			if (contadorIntentos<10 && contadorIntentos>5) {
				alert("Falta técnica");
			}// 6-10
			if (contadorIntentos==5) {
				alert("Usted está en la media");
			}// ==5
			
			if (contadorIntentos==4) {
				alert("Excelente técnica");
			}// ==4
			
			if (contadorIntentos==3) {
				alert("Esto es suerte");
			}// ==3
			
			if (contadorIntentos==2) {
				alert("Excelente percepción");
			}// ==2
			
			if (contadorIntentos==1) {
				alert("Usted es un psíquico");
			}// ==1
			
		}//IF GANO

		else{

			if(numeroSecreto>numeroIngresado){

				alert("FALTA! te quedaste corto");
			}//IF QUEDASTE CORTO

			else{ alert("¡TE PASASTE!");} //ELSE TE PASASTE

		} //IF ELSE


}