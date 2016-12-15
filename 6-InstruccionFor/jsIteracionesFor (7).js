function Mostrar()
{

var interaccion=0;
var numeroRandom;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;
var contPar=0;
var contImpar=0;
var total;
var porc5=0;


while (interaccion<1000000)
{

	interaccion=interaccion+1;
	numeroRandom=Math.floor((Math.random()*10)+1);

	switch(numeroRandom)
	{
		case 1:
		cont1++;
		break

		case 2:
		cont2++;
		break

		case 3:
		cont3++;
		break

		case 4:
		cont4++;
		break

		case 5:
		total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
		porc5=(cont5/total*100);

		if(porc5<7){

			cont5++;
		}
		else{

			interaccion=interaccion-1;
			continue;
		}

		break

		case 6:
		cont6++;
		break

		case 7:
		cont7++;
		break

		case 8:
		cont8++;
		break

		case 9:
		cont9++;
		break

		case 10:
		cont10++;
		break



	}//switch

	if(numeroRandom%2==0){

		contPar++;
	}//if
	else {

		contImpar++;
	}//else


}//while
	
	var total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
	console.log("El número 1 salió :"+cont1+"veces"+(cont1/total*100)+"%");
	console.log("El número 2 salió :"+cont2+"veces"+(cont2/total*100)+"%");
	console.log("El número 3 salió :"+cont3+"veces"+(cont3/total*100)+"%");
	console.log("El número 4 salió :"+cont4+"veces"+(cont4/total*100)+"%");
	console.log("El número 5 salió :"+cont5+"veces"+(cont5/total*100)+"%");
	console.log("El número 6 salió :"+cont6+"veces"+(cont6/total*100)+"%");
	console.log("El número 7 salió :"+cont7+"veces"+(cont7/total*100)+"%");
	console.log("El número 8 salió :"+cont8+"veces"+(cont8/total*100)+"%");
	console.log("El número 9 salió :"+cont9+"veces"+(cont9/total*100)+"%");
	console.log("El número 10 salió :"+cont10+"veces"+(cont10/total*100)+"%");
	console.log("El total es : "+total);
	console.log(contPar+" números pares");
	console.log(contImpar+" números Impares");

}//FIN DE LA FUNCIÓN