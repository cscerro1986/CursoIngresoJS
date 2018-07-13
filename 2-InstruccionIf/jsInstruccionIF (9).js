function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numero;

//numero=Math.floor((Math.random() * 10)+1);

numero=Math.floor(Math.random() * (11-1))+1;

alert(numero);



}//FIN DE LA FUNCIÓN

/*

numero=Math.floor(Math.random() * (11-1))+1; se multiplica por el numero maximo que se busca menos el minimo... y al resultado se le suma el minimo

la funcion ranrom te tira un numero entre [0,1) el 0 incluido y el 1 no... por ejemplo 0,48635324
si quiero un numero entero lo multiplico por 10 o sea 4.8635324

pero como no quiero incluir los decimales incluyo el .floor que lo que hace es redondear el numero random entre 1 y 10)
por ejemplo 4,8635324 --> 5


*/