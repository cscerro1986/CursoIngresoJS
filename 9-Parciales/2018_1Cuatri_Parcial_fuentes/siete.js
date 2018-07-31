/*

jose 	m 	25 entre 0 y 100
maria 	f 	25
jesus 	m 	33
fer 	f 	81

*/



function mostrar()
{

var edad;
var nombre;
var sexo;
var contador=0;
var contadorDeMujeres=0;
var contadorDeVarones=0;
var contadorDeMayores=0;
var contadorDeMenores=;




while(contador<4){

	contador=contador+1;

	nombre=prompt("ingrese su nombre");

	sexo= prompt("ingrese sexo");
		while(sexo!="m"&&sexo!="f"){
		nombre=prompt("ingrese su nombre");


		}

	edad =prompt("ingrese su edad");
	edad =parseInt(edad);
	while(isNaN(edad)||edad>100||edad<0){

		edad =prompt("ingrese su edad");
		edad =parseInt(edad);

	}


	if (sexo=="f") 
		{
			contadorDeMujeres=contadorDeMujeres+1;
		}else

		{		
			contadorDeVarones=contadorDeVarones+1;

		}
	
	if (edad>=18){
			contadorDeMayores=contadorDeMayores+1;

	}else
		{
			contadorDeMenores=contadorDeMenores+1;

		}








	}

document.write("la cantidad de varones es "+ contadorDeVarones +"<BR> la cantidad de mujeres es "+ contadorDeMujeres );
document.write("la cantidad de menores es "+ contadorDeMenores +"<BR> la cantidad de mujeres es "+ contadorDeMujeres );





















//nombre = prompt("ingrese su nombre");
//edad =prompt("ingrese su edad");
//edad =parseInt(edad);






/*	
while(isnan(edad)){
		edad=prompt("ingrese un numero");
		edad=parseInt(edad);// si ingresa un numero me va a tirar Nan!! 
		}

	while(edad<0||edad>100){
		edad=prompt("ingrese un numero");
		edad=parseInt(edad);// si ingresa un numero me va a tirar Nan!!

		}
	sexo=prompt("insgrese su sexo");
	while(sexo!="f"&&sexo!="m"){

		sexo=prompt("insgrese su sexo");
		switch(sexo){
			case "f":
				contadorDeMujeres=contadorDeMujeres+1;
			break;
			case "m":
				contadorDeVarones=contadorDeVarones+1;

		}

	}


}

*/
}


