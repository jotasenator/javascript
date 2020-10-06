
esPrimo = (n) => {

    for (let i = 2; i <= 9; i++) {
        if (n != i) {
            if (n % i == 0) {
                return ' No es primo'
            } else {
                return ' Es primo'
            }
        }
    }
}

console.log(esPrimo(2))
console.log(esPrimo(13))
console.log(esPrimo(131))
console.log(esPrimo(997))
console.log(esPrimo(12))




