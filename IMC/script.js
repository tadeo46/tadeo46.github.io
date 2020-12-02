function calcular() {
    peso = document.getElementById("peso");
    altura = document.getElementById("altura");
    res = document.getElementById("resultado");
    res2 = document.getElementById("resultado2");
    
    if (peso.value != "" && altura.value != "") {
        resultado = (peso.value / (altura.value * altura.value));
        resultado = Math.round(resultado * 100) / 100;
        res.innerHTML = resultado
        console.log(resultado);

        if (resultado < 18.5) {
            res2.innerHTML = "Vamos mal";
            document.getElementById("lado").style.backgroundImage = "url('img/flaco.jpg')";
        } else if (resultado >= 18.5 && resultado < 25) {
            res2.innerHTML = "Normal";
            document.getElementById("lado").style.backgroundImage = "url('img/normal.jpg')";
        } if (resultado >= 25 && resultado < 30) {
            res2.innerHTML = "Sobrepeso";
            document.getElementById("lado").style.backgroundImage = "url('img/Millonario.jpg')";
        } if (resultado >= 30) {
            res2.innerHTML = "PESAO";
            document.getElementById("lado").style.backgroundImage = "url('img/Pesao.jpg')";
        }
    } else {
        res2.innerHTML = "Error en calculo";
    }
}