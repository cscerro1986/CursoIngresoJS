function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero1=0;
	
	var promedio;
	promedio=parseInt(promedio);
	var suma=0;
	suma=parseInt(suma);


while (contador<5){

	numero1 =prompt("ingrese un numero");
	numero1=parseInt(numero1);// si ingresa un numero me va a tirar Nan!! 

	while(insnan(num)){
		numero1 =prompt("ingrese un numero");
		numero1=parseInt(numero1);// si ingresa un numero me va a tirar Nan!! 
		}

		suma=suma+numero1;
		contador = contador+1;
		promedio = suma/contador;
	}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN

/*
while (insnan(num)){
	
	cuando no es un numero me 
}