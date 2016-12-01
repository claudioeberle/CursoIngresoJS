/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precioBruto;

 	marca= document.getElementById('Marca').value;
 	cantidad= document.getElementById('Cantidad').value

//vamos a ver si funciona
	console.log(marca+cantidad);
	precioBruto=cantidad*35;
	precioFinal=precioBruto;

//vamos a ver si funciona
	console.log("precioBruto :" +precioBruto);

	if (cantidad>5) {

			precioFinal=precioBruto*0.5;

	}//if >5

	if (cantidad==5) {

		if (marca=="ArgentinaLuz") {

			precioFinal=precioBruto*0.6;

		}//if argentinaluz
		else{

				precioFinal=precioBruto*0.7;
			}// else 
	}//if ==5

	if (cantidad==4) {

		if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") {

			precioFinal=precioBruto*0.75;
		}// if 0.75
		else {

				precioFinal=precioBruto*0.8;

		}//else

	}// if 4

	if (cantidad==3) {

		if (marca=="ArgentinaLuz") {

			precioFinal=precioBruto*0.85;

		}// if argentinaluz
		else{
				if(marca=="FelipeLamparas") {

					precioFinal=precioBruto*0.90;

				} // if felipelamp
				else{

					precioFinal=precioBruto*0.95;

				} // else
		}//else
	}//if 3

	if (precioFinal>120) {

			var impuesto=precioFinal*0.10;
			precioFinal=precioFinal*1.10;
			alert("Usted pagó "+ impuesto +" de IIBB" );

	}//precio final 120

	document.getElementById('precioDescuento').value=precioFinal;




}
