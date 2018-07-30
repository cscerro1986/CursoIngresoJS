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

	var precio;
	var cantidad;
	var precioXcantidad;
	var descuento;
	var precioConDescuento;
	var precioFinal;
	var marca;
	var iibb;


	cantidad=document.getElementById('Cantidad').value;	
 	cantidad=parseInt(cantidad);
 	precio=35;
 	precio=parseInt(precio);
 	precioXcantidad=precio*cantidad;
 	marca=document.getElementById("Marca").value;





 	switch(cantidad){
 		case 0 :
 		case 1 :
 		case 2 :
 			precioConDescuento=precioXcantidad*1;
 		break;

 		case 3 :
 			switch(marca){
 				case "ArgentinaLuz":
 					precioConDescuento=precioXcantidad*0.85;
 				break;

 				case "FelipeLamparas":
 					precioConDescuento=precioXcantidad*0.9;
 				break;
 				default:
 					precioConDescuento=precioXcantidad*0.95;

 				}

 			
 		break;
 		case 4 :
 			switch(marca){
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					precioConDescuento=precioXcantidad*0.75;
 				break;
 				default:
 					precioConDescuento=precioXcantidad*0.8;
 				}
 		break;
 		case 5 :
 			switch (marca){
 				case "ArgentinaLuz":
 					precioConDescuento=precioXcantidad*0.6;
 				break;
 				default:
 					precioConDescuento=precioXcantidad*0.7;
 				}		
 		default :
 			precioConDescuento=precioXcantidad*0.5;
 		

 		}

	switch(true){
		case precioConDescuento>100:
			iibb = precioConDescuento*0.1;
			precioConDescuento=precioConDescuento+iibb;
			alert("”Usted pagos "+iibb+" de impuestos.");
			break;
		default:



	} 		



 	document.getElementById('precioDescuento').value =precioConDescuento;






/*
 	if (cantidad>=6) {
 		precioConDescuento=precioXcantidad*0.5;
 		alert(precioConDescuento);
 	}else{
 		if (cantidad==5&&marca=="ArgentinaLuz") {
 			precioConDescuento=precioXcantidad*0.6;
 			alert(precioConDescuento);
 			}
 			else{
 				if (cantidad==5&&marca!="ArgentinaLuz") {
 					precioConDescuento=precioXcantidad*0.7;
 					alert(precioConDescuento);

 					}else{
 						if (cantidad==5) {
 							precioConDescuento=precioXcantidad*0.7;
 							alert(precioConDescuento);

 						}else{
 							if (cantidad==4&&(marca=="ArgentinaLuz"||marca=="FelipeLamparas")){
 								precioConDescuento=precioXcantidad*3;
 								alert(precioConDescuento);
 							
 							}else{
 								if (cantidad==4) {
 									precioConDescuento=precioXcantidad*2;
 									alert(precioConDescuento);
 								}else{
 									if (cantidad==3&&marca=="ArgentinaLuz") {
 										precioConDescuento=precioXcantidad*0.85;
 										alert(precioConDescuento);
 									
 									}else{
 										if (cantidad==3&&marca=="FelipeLamparas") {
 											precioConDescuento=precioXcantidad*0.9;
 											alert(precioConDescuento);

 										}else{
 											if (cantidad==3&&(marca!="ArgentinaLuz"||marca!="FelipeLamparas")) {
 												precioConDescuento=precioXcantidad*0.95;
 												alert(precioConDescuento);
 											}
 										}
 									}
 								}
 							}
 						}
 					}
 				}


 		}

 		if (precioConDescuento>=110) {
 			precioFinal=precioConDescuento*1.1;
 			alert("El precio final es de: "+precioFinal);

 		}else{
 			precioFinal=precioConDescuento;
 			alert(precioFinal);
 		}

*/



} 		




