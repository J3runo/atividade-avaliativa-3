import leia, { question } from "readline-sync"


var notaf = leia.questionFloat("Nota final\n")

if (notaf >= 9 ){
    console.log("Nota A\n")
}
else if (notaf >= 8 ){
    console.log("Nota B\n")
}

else if (notaf >= 7 ){
    console.log("Nota C\n")
}

else if (notaf >= 6 ){
    console.log("Nota D\n")
}
else if (notaf < 6 ){
    console.log("Nota E\n")
}