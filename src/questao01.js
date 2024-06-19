import leia, { question } from "readline-sync"

var valor = leia.questionFloat("valor da compra\n")



if (valor < 20) {valor = (valor * 0.45) + valor

    
console.log ("Valor com 45% ","R$: " + valor)

}
else {valor = (valor * 0.30) + valor
    console.log("Valor com 30% ","R$: " + valor)
}

 