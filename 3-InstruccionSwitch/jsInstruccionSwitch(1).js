function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

	case "Enero":
		alert('que comiences bien el año!!!.');
		break;
	
	case "Marzo":
		alert('A Clases!!');
		break;
	
	case "Julio":
		alert('se vienen las vacaciones!!!');
		break;
	
	case "Diciembre" :
		alert('Felices fiestas!!');
		break;
	default :
		alert('No hay nada para mostrar');
	}




}//FIN DE LA FUNCIÓN