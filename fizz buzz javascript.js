
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}

for (i of range(1, 100)) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizz Buzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}