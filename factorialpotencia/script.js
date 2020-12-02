function factorial(){
    let zona = document.getElementById("datos");
    let espacio = document.createElement("br");
    let numero = document.createElement("textarea");
    let boton = document.createElement("button");
    let texto = document.createElement("label");

    numero.id = 'numero';
    boton.innerText = 'Calcular';
    boton.onclick = function(){calcularFactorial()};
    texto.innerText = 'Numero: ';

    numero.style.cssText = 'width: 300px;';
    texto.style.cssText = 'font-family: inherit;font-size: 20px;margin-left: 20px;margin-top: 20px;-webkit-appearance: none;-moz-appearance: none;cursor: pointer;';
    boton.style.cssText = 'font-family: inherit;font-size: 20px;margin-left: 20px;margin-top: 20px;-webkit-appearance: none;-moz-appearance: none;cursor: pointer;';

    zona.appendChild(texto);
    zona.appendChild(numero);
    zona.appendChild(espacio);
    zona.appendChild(boton);   
}  

function calcularFactorial(){
    var numero = document.getElementById("numero").value;
    let resultado = document.createElement("label");
    let zona = document.getElementById("resultado");

    for(var i = numero; i > 1; i--){
        numero = parseInt(numero * (i-1));
    }

    resultado.style.cssText = 'font-family: inherit;font-size: 20px;margin-left: 20px;margin-top: 20px;-webkit-appearance: none;-moz-appearance: none;cursor: pointer;';
    resultado.innerText = 'Resultado: ' + numero;
    zona.appendChild(resultado);
}

function potencia(){
    let zona = document.getElementById("datos");
    let espacio = document.createElement("br");
    let espacio2 = document.createElement("br");
    let numero = document.createElement("textarea");
    let numero2 = document.createElement("textarea");
    let boton = document.createElement("button");
    let texto = document.createElement("label");
    let texto2 = document.createElement("label");

    numero.id = 'numero';
    numero2.id = 'exponente';
    boton.innerText = 'Calcular';
    boton.onclick = function(){calcularPotencia()};
    texto.innerText = 'Numero: ';
    texto2.innerText = 'Exponente: ';


    numero.style.cssText = 'width: 300px;';
    numero2.style.cssText = 'width: 300px;';    
    boton.style.cssText = 'font-family: inherit;font-size: 20px;margin-left: 20px;margin-top: 20px;-webkit-appearance: none;-moz-appearance: none;cursor: pointer;';

    zona.appendChild(texto);
    zona.appendChild(numero);
    zona.appendChild(espacio);
    zona.appendChild(texto2);
    zona.appendChild(numero2);
    zona.appendChild(espacio2);
    zona.appendChild(boton);   
}

function calcularPotencia(){
    var numero = document.getElementById("numero").value;
    var numero2 = document.getElementById("exponente").value;
    let resultado = document.createElement("label");
    let zona = document.getElementById("resultado");

    var auxiliar = numero;
    for(var i = 0; i < numero2-1; i++){
        numero = parseInt(numero * auxiliar);
    }

    resultado.style.cssText = 'font-family: inherit;font-size: 20px;margin-left: 20px;margin-top: 20px;-webkit-appearance: none;-moz-appearance: none;cursor: pointer;';
    resultado.innerText = 'Resultado: ' + numero;
    zona.appendChild(resultado);
}