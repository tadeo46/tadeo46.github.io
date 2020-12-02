i = 60;
viendoapenas = 0;
c = 0;
puntos = 0;
function peto90(){
	document.getElementById('tiempo').innerHTML = i;
	i--;
	if(i < 0){
		alert("mamo");
		i = 60;
		document.getElementById('resultado').innerHTML = "";
	}
  else {
    setTimeout(peto90, 1000);
  }
}
function espada(element) {
	 if(viendoapenas ==  1 && element.id == "reyespada") {
	    element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }
function caballoespada(element) {
	 if(viendoapenas ==  1 && element.id == "caballeroespada") {
	    element.src = "https://4.bp.blogspot.com/-ne9BE3-EWR4/WfyORhDHQpI/AAAAAAAAAUs/4bGm2SniFBcW_4yKn-ZfuYVVol4e_xBcgCLcBGAs/s400/11e_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }
function copa(element){
	  if(viendoapenas ==  1 && element.id == "reycopa") {
	    element.src = "https://1.bp.blogspot.com/-k7TB0KYfclY/WO5UPQx7lAI/AAAAAAAAAKk/TVpm-X72-hU825R39OuMjjgxlb0AHI4wQCLcB/s320/12o_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }
function oro(element){
	 if(viendoapenas ==  1 && element.id == "reyoro") {
	    element.src = "https://1.bp.blogspot.com/-k7TB0KYfclY/WO5UPQx7lAI/AAAAAAAAAKk/TVpm-X72-hU825R39OuMjjgxlb0AHI4wQCLcB/s320/12o_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }
function basto(element){
	 if(viendoapenas ==  1 && element.id == "reybasto") {
	    element.src = "https://1.bp.blogspot.com/-k7TB0KYfclY/WO5UPQx7lAI/AAAAAAAAAKk/TVpm-X72-hU825R39OuMjjgxlb0AHI4wQCLcB/s320/12o_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }
function caballobasto(element) {
	 if(viendoapenas ==  1 && element.id == "caballerobasto") {
	    element.src = "https://4.bp.blogspot.com/-ne9BE3-EWR4/WfyORhDHQpI/AAAAAAAAAUs/4bGm2SniFBcW_4yKn-ZfuYVVol4e_xBcgCLcBGAs/s400/11e_.jpg";
		viendoapenas = 0;
		puntos = puntos + 1;
	  }else{
	  
	if(element.src == "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg"){
	  element.src = "https://4.bp.blogspot.com/-0tdgCbxBmqk/WgK-6iJqq7I/AAAAAAAAAVI/kPk6RePmGMkdCyaQ4bc5xLMxU4JT7npnQCLcBGAs/s400/12e_.jpg";
	  viendoapenas = 1;
	  
	}else{
	  element.src = "https://asdetrebol.com/8577711-medium_default/carta-jumbo-bicycle-doble-dorso-rojo-azul-us-playing-card-co-cartas-especiales-jumbo.jpg";
	}
}
	  }