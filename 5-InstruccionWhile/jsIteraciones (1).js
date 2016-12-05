function Mostrar()
{
	var contador=0;

	document.write("<h1>hola</h1>");

	while(contador<10){

		contador++;
		console.log(contador);
		document.write("<br>Contador : "+contador);
	}

	document.write("<p>fin</p>");
	
	//alert('iteración while');


}//FIN DE LA FUNCIÓN