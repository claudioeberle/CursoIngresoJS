function Mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById('edad').value;


if (edad<18 && edad>=13) {

	alert("Adolescente");
}//if

	else if (edad>=18) {
	alert("Mayor de edad");
}//else if 18

		else {alert("Menor de edad");
}//else



}//FIN DE LA FUNCIÓN