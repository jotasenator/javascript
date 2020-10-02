
let s = 'atyeigouia'
let k = 3

let lista = []
let contador = 0
let contadorVocales = 0
let substringGanador

for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + k).length === k) {
        lista.push(s.slice(i, i + k))
    }
}
console.log(lista)

for (let j of lista) {
    contador = 0
    for (let k of j) {
        if (k == 'a' || k == 'i' || k == 'u' || k == 'e' || k == 'o') {
            contador += 1
        }

    } if (contador > contadorVocales) {
        contadorVocales = contador
        substringGanador = j
    }
}

if (contadorVocales == 0) {
    console.log('Not Found!')

} else {
    console.log(substringGanador, contadorVocales)

}
