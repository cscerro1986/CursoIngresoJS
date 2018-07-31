function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo=-999999;
	var minimo=9999999;
	var numero;





	while(respuesta!='no')
	{
		
		numero= prompt("ingrese un numero");
		numero=parseInt(numero);

		/*while(isnan(num)){
		numero =prompt("ingrese un numero");
		numero=parseInt(numero1);// si ingresa un numero me va a tirar Nan!! 
		}
		*/
		


		if (numero>maximo){

			maximo=numero;


		}else if (numero<minimo) 

		{

			minimo=numero;
		}


		respuesta = prompt("Desea continuar?");
	}


	document.getElementById('maximo').value =maximo;
	document.getElementById('minimo').value =minimo;

}//FIN DE LA FUNCIÓN