function Mostrar()
{
//tomo la edad  

	var edad;
	var EstadoCivil;

	edad= document.getElementById('edad').value;
	EstadoCivil= document.getElementById('estadoCivil').value;

	if (edad>17 && EstadoCivil=="Soltero") {

		alert("Es soltero y no es menor");
	}/*if*/ else {alert("DISTINTO");
	
			}//else




}//FIN DE LA FUNCIÓN