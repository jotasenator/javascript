
arr = [1, 2, 3, 4, 5, 6]


/*
var result = [].concat(...arr.map(
    (v, i) => arr.slice(i + 1).map(w => v + ',' + w))
);

console.log(result);*/

arr = [1, 2, 3, 4, 5, 6];
let lista = [];

for (let i = 0; i < arr.length; i++) {
    console.log('primera lista', i)
    for (let j = i + 1; j < arr.length; j++) {
        console.log('segunda lista', j)
        lista.push([arr[i], arr[j]]);
    }
}
console.log(lista)

for (let i of lista) {
    console.log(i[0], i[1])
}

console.log('combinaciones', lista.length)

