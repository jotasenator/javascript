
let path = 'UUDDDUUDDDUDUUUD'

let [contador_valle, contador_U, contador_D] = [0, 0, 0]

console.log(contador_D, contador_U, contador_valle)

for (let i of path) {
    if (path.length > 0) {
        if (path[0] === 'U') {
            if (i === 'U') {
                contador_U += 1
            } else {
                contador_D += 1
                if (contador_D - contador_U === 0) {
                    path = path.slice(contador_D + contador_U)
                    contador_U = 0
                    contador_D = 0

                }
            }


        } else {
            if (i === 'D') {
                contador_D += 1
            } else {
                contador_U += 1
                if (contador_D - contador_U === 0) {
                    path = path.slice(contador_D + contador_U)
                    contador_valle += 1
                    contador_U = 0
                    contador_D = 0

                }
            }
        }
    }

}
console.log(contador_valle)
