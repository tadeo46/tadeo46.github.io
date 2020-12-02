function multiplicacion(){
	x = 0;
	c = 0;
	let numero = document.getElementById("multiplo").value;
    let cantidad = document.getElementById("multiplicador").value;
    let resultado = document.getElementById("resultados");
	let alerta1 = document.getElementById("error_tabla");
	let alerta2 = document.getElementById("error_resultados");
    let tabla = document.createElement("table");
	alerta1.innerText="";
	alerta2.innerText="";
	resultado.innerHTML="";
	if(numero > 50 ||  numero < 1 ){
		alerta1.innerText="tabla invalida";
		c = 1;
	}
	if(cantidad > 20 || cantidad < 1){
			alerta2.innerText="resultado invalidos";
			x = 1;
		}
	if(x == 0 && c == 0){
		x = 0;
		c = 0;
	tabla.setAttribute("border", "2");
   resultado.appendChild(tabla);
    for(let step = 0; step < cantidad; step++){
        let fila = document.createElement("tr");
        let columna = document.createElement("th");
        let columna2 = document.createElement("th");
        columna.innerText = step+1;
        columna2.innerText = numero * (step+1);
        tabla.appendChild(fila);
        tabla.appendChild(columna)
        tabla.appendChild(columna2);
    }
    }else{
		x = 0;
		c = 0;
	}
}
