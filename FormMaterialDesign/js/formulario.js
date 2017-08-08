(function(){
	var formulario = document.formulario_registro,
			elementos = formulario.elements;
	
	var validarInputs = function(){
		for (var i = 0; i < elementos.length; i++){
			if (elementos[i].type == "text" || elementos[i].type == "email"    	         || elementos[i].type == "password"){
				if(elementos[i].value == 0){
					console.log('El campo ' + elementos[i].name + ' está incompleto');
					elementos[i].className = elementos[i].className + ' error';
					return false;
				} else {
					elementos[i].className = elementos[i].className.replace('error','');
				}
			}
		}
		if (elementos.password.value !== elementos.password2.value){
			elementos.password.value = "";
			elementos.password2.value = "";
			elementos.password.className = elementos.password.className + " error";
			elementos.password2.className = elementos.password2.className + " error";
			return false;
		} else {
			elementos.password.className = elementos.password.className.replace("error", "");
			elementos.password2.className = elementos.password2.className.replace("error", "");
		}
		
		return true;
	};
	
	var validarRadios = function(){
		var opciones = document.getElementsByName('sexo'),
				opcionElecta = false;
		
		for(var i = 0; i < elementos.length; i++){
			if (elementos[i].type == "radio" && elementos[i].name == "sexo"){
				for ( var o = 0; o < opciones.length; o++ ){
					if (opciones[o].checked){
						opcionElecta = true;
						break;
					}
				}
				if (!opcionElecta){
					elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
					console.log('El campo sexo esta incompleto');
					return false;
				} else {
					elementos[i].parentNode.className = elementos[i].parentNode.className.replace('error','');
					return true;
				}
			}
		}
	};
	
	var validarCheckbox = function(){
		var opciones  = document.getElementsByName('terminos'),
				opcionElecta = false;
		
		for(var i = 0; i < elementos.length; i++){
			if (elementos[i].type == "checkbox"){
				for ( var o = 0; o < opciones.length; o++ ){
					if (opciones[o].checked){
						opcionElecta = true;
						break;
					}
				}
				if (!opcionElecta){
					elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
					console.log('El campo terminos esta incompleto');
					return false;
				} else {
					elementos[i].parentNode.className = elementos[i].parentNode.className.replace('error','');
					return true;
				}
			}
		}
	};
	// functions
	var enviar = function(e){
		if (!validarInputs()){
			console.log('Falta validar Inputs');
			e.preventDefault();
		} else if(!validarRadios()){
			console.log('Falta validar Radios');
			e.preventDefault();
		}	else if(!validarCheckbox()){
			console.log('Falta validar Checkbox');
			e.preventDefault();
		}	else {
			console.log('Validaciones PASSED');
			//e.preventDefault();
		}
	}
	
	var focusInput = function(){
		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace(" error", "");
	};
	
	var blurInput = function(){
		if (this.value <= 0){
			this.parentElement.children[1].className =  "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
		}
	}
	// events
	formulario.addEventListener("submit", enviar);
	
	for( var i=0; i < elementos.length; i++){
		if (elementos[i].type == "text" || elementos[i].type == "email" ||elementos[i].type == "password"){
			elementos[i].addEventListener("focus",focusInput);
			elementos[i].addEventListener("blur",blurInput);
		}
	}
}());