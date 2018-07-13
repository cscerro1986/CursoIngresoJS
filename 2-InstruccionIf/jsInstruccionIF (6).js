function mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

if (edad<13) { 

	alert("La persona es un niño");
}	else{
	
	if (edad>=13&&edad<=17) {

		alert("La persona es adolecente");
	}else{
	
	if(edad>=18){

		alert("la persona es mayor de edad");
	}	

	}



}




}//FIN DE LA FUNCIÓN