function mostrar()
{



	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero1=0;
	numero1=parseInt(numero1);
	var respuesta='si';


	while(respuesta=="si"){
		numero1 = prompt("ingrese un numero");
		numero1=parseInt(numero1);
		if (numero1>0) {
			positivo=numero1+positivo;
		}else{
			negativo=negativo*numero1;
			}

	respuesta = prompt("Desea continuar?");


	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN