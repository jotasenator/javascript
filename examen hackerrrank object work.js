'use strict'
var collection = []

class StaffList {
    add(name, age) {
        this.name = name
        this.age = age
        if (this.age > 20) {
            if (collection.includes(this.name, 0) == false) {
                collection.push(this.name)
            }
        } else if (this.age <= 20) {
            try {
                throw new Error('Stage member age must be greater than 20.')


            } catch (e) {
                console.log(`${e.name}: ${e.message}`)

            }

        }
    }

    remove(name) {
        this.name = name
        if (collection.includes(this.name)) {

            collection.splice(collection.indexOf(this.name), 1)
            return true

        } else {
            return false
        }
    }

    getSize() {
        return collection.length
    }
}

var l1 = new StaffList()

l1.add('Maykel', 39)
console.log(collection)
console.log(l1.getSize())

l1.add('Junio', 60)
console.log(collection)
console.log(l1.getSize())

l1.add('Patricio', 160)
console.log(collection)
console.log(l1.getSize())

l1.remove('Maykel')
console.log(collection)
console.log(l1.getSize())

l1.add('Barbie', 19)
console.log(collection)
console.log(l1.getSize())


