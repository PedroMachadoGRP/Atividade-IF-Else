let a = prompt("Diga um número")
let número1 = Number(a)
let b = prompt("Diga outro número")
let número2 = Number(b)
let operacao = prompt("Diga a operação que você deseja")

if (operacao === "+") {
    console.log('Sua resposta é',número1 + número2)
}

else if (operacao === "-") {
    console.log('Sua resposta é',número1 - número2)
}

else if (operacao === "*") {
    console.log ('Sua resposta é',número1 * número2)
}

else if (operacao === "/") {
    console.log('Sua resposta é',número1 / número2);

}else console.log('Você fez algo errado')