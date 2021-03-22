var fleche = new Array("Bianca.png","Isabelle.png","Jonathan.png")
var numero = 0;

function ChangeFleche(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = fleche.length - 1;
    if (numero > fleche.length - 1)
        numero = 0;
    document.getElementById("fleche").src = fleche[numero];
}

