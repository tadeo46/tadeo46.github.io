function multiplicacion(){
	let numero = document.getElementById("multiplo").value;
    let cantidad = document.getElementById("multiplicador").value;
    let resultado = document.getElementById("resultados");
    let tabla = document.createElement("table");
	tabla.setAttribute("border", "2");
   resultado.appendChild(tabla);
    for(let step = 0; step < cantidad; step++){
        let fila = document.createElement("tr");
        let columna = document.createElement("th");
        let columna2 = document.createElement("th");
        columna.innerText = step+1;
        columna2.innerText = numero * (step+1);
        
        columna.style.cssText = 'background-color: white;padding:5px;width:10%;';
        columna2.style.cssText = 'background-color: white;padding:5px;width:10%;';

        tabla.appendChild(fila);
        tabla.appendChild(columna)
        tabla.appendChild(columna2);
    }
    
}
