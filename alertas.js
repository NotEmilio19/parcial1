function ejecutar(){

 	placas=document.regis.placas.value;
	nombre=document.cont.nombre.value;
	ap_paterno=document.regis.ap_paterno.value;
	kilo=document.regis.kilo.value;
	precio=document.regis.precio.value;

	if (document.regis.placas.value.lenght == 0) {
		alert("No haz indicado tus placas");
	}

	if (document.regis.kilo.value.lenght == 0) {
		alert("No haz indicado el kilometraje");
	}

	if (document.regis.precio.value.lenght == 0) {
		alert("No haz indicado el precio");
	}

	if (document.cont.nombre.value.lenght == 0) {
		alert("No haz indicado tu nombre");
	}
		if (document.cont.ap_paterno.value.lenght == 0) {
		alert("No haz indicado tu apellidos");
	}

	
}

