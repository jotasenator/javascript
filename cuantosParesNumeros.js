
arr = [1, 2, 1, 3, 8, 1, 4, 2, 1]

arr.sort()

newSet = new Set(arr)

lista = []
for (i of newSet.values()) {
    contador = 0

    for (j = 0; j < arr.length; j++) {
        if (i === arr[j]) {
            contador += 1
        }

    }
    valor = contador / 2
    if (valor >= 1) {
        lista.push(+(contador / 2).toPrecision(1))

    }

}
if (lista != 0) {

    let sumar = (a, b) => { return a + b }

    console.log(`Hay '${lista.reduce(sumar)}' parejas de numeros`)

} else {
    console.log('No hay parejas de numeros Ismael!')
}


