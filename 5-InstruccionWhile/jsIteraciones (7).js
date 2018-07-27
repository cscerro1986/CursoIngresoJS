function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero1=0;



	while(respuesta=="si"){

		numero1 = prompt("ingrese un numero");
		numero1=parseInt(numero1);
		acumulador=acumulador+numero1;
		contador=contador+1;
		respuesta= prompt("Desea contuniar?");
		



	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}




//FIN DE LA FUNCIÓN

/*

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero1=0;



	while(isNan(num)){

		numero1 = prompt()
		if(numero1=="si"){

			break;// se puede usar break o continue para que corte con el while.
			continue;
		}



	}























*/