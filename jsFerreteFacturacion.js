/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


	


function Sumar () 
{

	var precioUno;
	var	precioDos;
	var	precioTres;
	var resultadoSuma;
	var resultadoPromedio;
	var resultadoFinal;

	precioUno = document.getElementById('PrecioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('PrecioDos').value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('PrecioTres').value;


	resultadoSuma=precioUno+precioDos+precioTres;
	alert(resultadoSuma);
	
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}