function Mostrar()
{

var sexo = prompt("ingrese f ó m");

document.getElementById('Sexo').value=sexo;

while(sexo!="f" && sexo!="m"){

	sexo=prompt("ERROR. Por favor ingrese f (para femenino) y m (para masculino)");

}

alert("BIENVENIDO GATO");



}//FIN DE LA FUNCIÓN