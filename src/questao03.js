import leia, { question } from "readline-sync"

var N1 = leia.questionFloat("NOTA 1\n")
var P1 = leia.questionFloat("PESO DA NOTA 1\n")

var N2 = leia.questionFloat("NOTA 2\n")
var P2 = leia.questionFloat("PESO DA NOTA 2\n")

var N3 = leia.questionFloat("NOTA 3\n")
var P3 = leia.questionFloat("PESO DA NOTA 3\n")

var MP = ((N1 * P1) + (N2 * P2) + (N3 * P3)) / (P1 + P2 + P3)

console.log("A media é " + MP)