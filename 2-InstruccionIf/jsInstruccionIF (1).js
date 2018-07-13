function mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

if (edad==15) { 

	alert("Niña bonita");


}


}

//FIN DE LA FUNCIÓN

/* la estructura IF no lleva  

el If{aca adentro va una condicion} que puede ser true o false
si es true se ejecuta l que esta dentro de las llaves, sino no se ejecuta y continua con lo que hay despues de la llave
la condicion se determina con operadores
== igual
!= distinto
!true sera false... todo lo que vaya despues del ! niega lo que sigue
< mayor
<= mayor o igual
> menor
>= menor o igual
=== igualdad estricta... esta va a comparar los tipos de valores, por ejemplo "2"===2 no se cumple por que uno es string y el otro es number

por ahora vamos a usar la simple.

otros tipos de operadores que son los operadores logicos que sirven 
para mas de una condicion por ejemplo que la edad sea mas de 18 o sexo femenino.
mayor de 18 años || sexo==femenino

&& "y"
|| "o"

despues de la condicion vienen } y el ELSE{
		} Este else no es obligatorio, y solo puede ir uno solo. se ingresa cuando no se cumple la condicion.


otra forma de escribir los if else anidados:

if {condicion

}else if{
	condion{
	
		}else if{
	
		}
	}





*/


