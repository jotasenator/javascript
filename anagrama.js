// comparo las longitudes de las palabras, si no tienen la misma longitud no es anagrama
// si una letra de la primera palabra no esta en la segunda, no es anagrama
// si la letra de la primera esta en la segunda borro esa letra en la segunda
// si es anagrama la longitud de la segunda lista debe haberse convertido en cero
// hay que se ver si se quiere considerar la mayuscula o la minuscula, de ser asi, .lowercase()
const anagrama = (x, y) => {
    x = x.toLowerCase().split('')
    y = y.toLowerCase().split('')
    if (x.length !== y.length) {
        return 'No es anagrama'
    } else {
        for (let i of x) {
            if (!y.includes(i)) {
                return 'No es anagrama'
            } else {
                y.splice(y.indexOf(i), 1)
            }
        }
    }
    if (y.length === 0) {
        return ' Es anagrama'
    } else {
        return 'No es anagrama'
    }
}

console.log(anagrama('JoDEr', 'Redjo'))