let a = prompt("diga um número")
let primeiro = Number(a)
let b = prompt ("Diga um segundo número")
let segundo = Number(b)
let c = prompt ("Diga um terceiro número")
let terceiro = Number(c)

if (segundo < primeiro &&  terceiro < primeiro) {
    console.log("Seu primeiro número é o maior",primeiro);
}

else if (primeiro < segundo && terceiro < segundo) {
    console.log("Seu segundo número é o maior",segundo);
}

else if (primeiro < terceiro && segundo < terceiro) {
    console.log("Seu terceiro número é o maior",terceiro);
}else alert('todos os números são iguais')
