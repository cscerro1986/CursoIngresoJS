function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var contadorPares=0;
	//contadorPares=parseInt(contadorPares);
	var contadorImpares=0;
	//contadorImpares=parseInt(contadorImpares);
	var contadorPositivos=0;
	//contadorPositivos=parseInt(contadorPositivos);
	var contadorNegativos=0;
	//contadorNegativos=parseInt(contadorNegativos);
	var promedioPosivitos;
	//promedioPosivitos=parseInt(promedioPosivitos);
	var promedioNegativos;
	//promedioNegativos=parseInt(promedioNegativos);
	var diferenciaEntreNegativosPositivos;
	diferenciaEntreNegativosPositivos=parseInt(diferenciaEntreNegativosPositivos);
	//var sumaPares;
	//var sumaImpares;
	//var contadorDeCeros;
	//var sumaDeNegativos;
	//var sumaDePositivos;
	var numeroPar;
	numeroPar=parseInt(numeroPar);
	var numeroImpar;
	numeroImpar=parseInt(numeroImpar);
	var numeroPositivo;
	numeroPositivo=parseInt(numeroPositivo);
	var numeroNegativo;
	numeroNegativo=parseInt(numeroNegativo);



	while(respuesta!="no")
	{
		numero = prompt("ingrese un numero por favor");
		numero = parseInt(numero);

		while(isNaN(num)){

			numero = prompt("ingrese un numero por favor");
			numero = parseInt(numero);
		}

				if (numero>0) 
				{
					if(numero%2==0)
					{
						contadorPares=contadorPares+1;
						contadorPositivos=contadorPositivos+1;
						numeroPar=numeroPar+numero;
						numeroPositivo=numeroPositivo+numero;
						contador=contador+1;

					}else {
						contadorImpares=contadorImpares+1;
						contadorPositivos=contadorPositivos+1;
						numeroPositivo=numeroPositivo+numero;
						numeroImpar=numeroImpar+numero;
						contador=contador+1;


					}

				}else if(numero<0)
				{
					if (numero%2==0) {
						contadorNegativos=contadorNegativos+1;
						contadorPares=contadorPares+1;
						numeroNegativo=numeroNegativo+numero;
						numeroPar=numeroPar+numero;
						contador=contador+1;



					}else {

						contadorNegativos=contadorNegativos+1;
						contadorImpares=contadorImpares+1;
						numeroNegativo=numeroNegativo+numero;
						numeroImpar=numeroImpar+1;
						contador=contador+1;


					}


				}else if (numero==0){
			contadorDeCeros=contadorDeCeros+1;

		}




		respuesta=prompt("desea continuar?");

	}

		
		diferenciaEntreNegativosPositivos=numeroPositivo-numeroNegativo;
		promedioNegativos=

		if(contadorPositivos>contadorNegativos){
			diferenciaEntreNegativosPositivos=contadorPositivos-contadorNegativo;
			alert(diferenciaEntreNegativosPositivos);
		}




		//document.write("la suma de pares es"+ sumaPares + "<BR>la suma de suma de impartes es  " + sumaImpares + "<BR> la suma de negativos es " + sumaDeNegativos + "<BR> la suma de positivos es " + sumaDePositivos + "<BR> el promedio de negativo es " + promedioNegativos + "<BR> el promedio de positivos es "+ promedioPosivitos + "<BR> la suma de ceros es " + contadorDeCeros );
		
		

	






	




}//FIN DE LA FUNCIÓN