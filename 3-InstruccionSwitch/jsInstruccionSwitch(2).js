function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

	case "Julio":
	case "Agosto":

	alert("Ya estamos en invierno");
	break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":

	alert("Aun no estamos")
	break;

	default:

	alert("CAGAMOS SE VIENE EL CALOOOOR");
	break;

}


alert (mesDelAño);




}//FIN DE LA FUNCIÓN