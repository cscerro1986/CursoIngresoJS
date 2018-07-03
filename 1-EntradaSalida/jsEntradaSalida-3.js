/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;  //el punto me dice que lo que viene despues pertenece al documento
	alert(nombre); // el alert nos devuelte un html object HTMLImputElemet.. no es error.. esta bien. este elemento tiene un valor y quiero acceder al mismo.


}


