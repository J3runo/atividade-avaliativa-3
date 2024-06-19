import leia, { question } from "readline-sync"


var v1 = leia.questionInt("Digite um valor inteiro\n")
var v2 = leia.questionInt("Digite um valor inteiro\n")
var v3 = leia.questionInt("Digite um valor inteiro\n")
 

if (v1 < v2 + v3){
    console.log("Triangulo valido")
}
else if(v2 < v1 + v3){
    console.log("Triangulo valido")
}
else if (v3 < v1 + v2){
    console.log("Triangulo valido")
}
else {
    console.log("Triangulo invalido")
}



