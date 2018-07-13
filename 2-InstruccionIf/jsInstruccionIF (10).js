function mostrar()
{

	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero=Math.floor((Math.random() * 10)+1);

	if (numero>=9) {


		alert("EXCELENTE");

	} else {

		if ( numero <9 && numero >= 4 ) {



			alert("APROBÓ");

		}
		else {
			alert("Vamos, la proxima se puede");

		}
	}


}//FIN DE LA FUNCIÓN