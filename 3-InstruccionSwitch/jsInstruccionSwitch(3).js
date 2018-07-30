function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño){
	case "Febrero":
		alert('El mes no tiene mas de 29 dias');
		break;
	default :
		alert('El mes tiene mas de 29 dias');
		break;
}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN