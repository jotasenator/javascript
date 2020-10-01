
let s = '{[[((([])))]][()]{({{[]}})}'

const c = ['()', '{}', '[]']
const longitud = s.length

console.time('t')
for (let i = 0; i < longitud; i++) {
    if (s.includes(c[0])) {
        console.log(s, '-', c[0])
        s = s.replace(c[0], '')

    } else if (s.includes(c[1])) {
        console.log(s, '-', c[1])
        s = s.replace(c[1], '')
    } else if (s.includes(c[2])) {
        console.log(s, '-', c[2])
        s = s.replace(c[2], '')
    }
}
console.log(s)
if (s == '') {
    console.log('balanceado')
} else {
    console.log('no balanceado')
}
console.timeEnd('t')