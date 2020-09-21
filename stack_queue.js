

var lista1 = []
var queue = {

    // eslint-disable-next-line no-undef
    inicio: inicio = (x) => lista1.push(x),
    // eslint-disable-next-line no-undef
    salida: salida = () => lista1.shift(),
    // eslint-disable-next-line no-undef
    getValue: getValue = () => lista1
}

queue.inicio(2)
console.log(queue.getValue())
queue.inicio(3)
console.log(queue.getValue())
queue.inicio(4)
console.log(queue.getValue())

queue.salida()
console.log(queue.getValue())
queue.salida()
console.log(queue.getValue())
queue.salida()
console.log(queue.getValue())

//stack

var lista2 = []
var stack = {

    // eslint-disable-next-line no-undef
    inicio: inicio = (x) => lista2.push(x),
    // eslint-disable-next-line no-undef
    salida: salida = () => lista2.pop(),
    // eslint-disable-next-line no-undef
    getValue: getValue = () => lista2

}


stack.inicio(2)
console.log(stack.getValue())
stack.inicio(3)
console.log(stack.getValue())
stack.inicio(4)
console.log(stack.getValue())
stack.salida()
console.log(stack.getValue())
stack.salida()
console.log(stack.getValue())
stack.salida()
console.log(stack.getValue())