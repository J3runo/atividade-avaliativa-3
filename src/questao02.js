import leia, { question } from "readline-sync"

var QH = leia.questionFloat("Quantidade de horas trabalhadas\n")
var VH = leia.questionFloat("Valor da hora trabalhadas\n")
var PD = leia.questionFloat("Percentual de desconto\n")

var VB = (VH * QH)
var DES = VB * (PD/100) 
var SL = (VB-DES)


console.log("Salario bruto " + VB)
console.log("Valor desconto " + DES)
console.log("Salario liquido " + SL)