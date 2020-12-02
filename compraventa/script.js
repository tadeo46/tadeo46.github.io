var numeroProducto = 1;
var subtotal = 0;
var iva = 0;

function agregar(){

    let nombreProducto = document.getElementById("productos");
    var selected = nombreProducto.options[nombreProducto.selectedIndex].text;

    let precio = document.getElementById("precio").value; 
    let cantidad = document.getElementById("cantidad").value;

    let tbody = document.getElementById("lista");


    let fila = document.createElement("tr");
    let numero = document.createElement("th");
    let producto = document.createElement("th");
    let precioUnitario = document.createElement("th");
    let unidades = document.createElement("th");
    let monto = document.createElement("th");

    producto.innerText=selected;
    numero.innerText=numeroProducto;
    numeroProducto++;
    precioUnitario.innerText=precio;
    unidades.innerText=cantidad;
    monto.innerText=parseFloat(precio*cantidad);

    producto.style.cssText='border: white 3px solid;';
    numero.style.cssText='border: white 3px solid;';
    precioUnitario.style.cssText='border: white 3px solid;';
    unidades.style.cssText='border: white 3px solid;';
    monto.style.cssText='border: white 3px solid;';


    tbody.appendChild(fila);
    tbody.appendChild(numero);
    tbody.appendChild(producto);
    tbody.appendChild(precioUnitario);
    tbody.appendChild(unidades);
    tbody.appendChild(monto);

    subtotal += parseFloat(precio*cantidad);
    iva += parseFloat((subtotal)*0.16);
    let montosubtotal = document.getElementById("montosubtotal");
    let montoiva = document.getElementById("montoiva");
    let montototal = document.getElementById("montototal");

    montosubtotal.innerText=subtotal.toFixed(2);
    montoiva.innerText=iva.toFixed(2);
    montototal.innerText=parseFloat(subtotal+iva).toFixed(2);
	function eliminar(fila){
	tbody.removeChild(fila);
	}
    
}
