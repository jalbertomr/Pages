function validar() {
	"use strict";
  var nombres, apellidos, email, usuario, password, telefono, expresion;
	
	nombres = document.getElementById("nombres").value;
	apellidos = document.getElementById("apellidos").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	password = document.getElementById("password").value;
	telefono = document.getElementById("telefono").value;
	expresion = /\w+@\w+\.+[a-z]/;
	
	if (nombres === "" || apellidos === "" || email === "" || usuario === "" || password === "" || telefono === "") {
		alert("Todos los campos son obligados, alguno esta vacio!");
		return false;
	} else if (nombres.length < 5) {
		alert("Los nombres son muy cortos [>5/30]");
		return false;
	} else if (apellidos.length < 10) {
		alert("Los apellidos son muy cortos [>10/80]");
		return false;
	} else if (email.length < 2) {
		alert("el correo es muy corto [>2/100]");
		return false;
	} else if (!expresion.test(email)) {
		alert("el correo no cumple con sintacsis palabra@palabra.palabra");
		return false;
	} else if (usuario.length < 2 || password.length < 2 ) {
		alert("el usuario y/o el password son muy cortos [>2,>2,20/20]");
		return false;
	} else if (telefono.length < 8) {
		alert("El teléfono es muy corto [>8/10]");
		return false;
	} else if(isNaN(telefono)) {
		alert("El teléfono no es numérico");
		return false;
	}
}