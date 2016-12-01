function Mostrar()
{
//tomo la edad  
var edad;
var EstadoCivil;

edad= document.getElementById('edad').value;
EstadoCivil= document.getElementById('estadoCivil').value;

console.log(estadoCivil);

if (EstadoCivil!="Soltero" && edad<18) {

	alert("Muy pequeño para NO ser soltero");
} //if NO soltero, menor 18

}