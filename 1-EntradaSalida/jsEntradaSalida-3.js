/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{var MiVariable
     MiVariable=document.getElementById('elNombre').value; //sin le .value al final tira error, con esa directiva la función toma el valor que el usuario ingresó en el formulario
alert(MiVariable);
}

