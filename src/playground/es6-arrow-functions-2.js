// arguments object - no longer bound

// const add = function(a, b) {
//     console.log(arguments)
//     return a + b
// }
// console.log(add(55, 1))


// this keyword - no longer bound

const user = {
    name: 'Sander',
    cities: ['Vassenden', 'Bergen', 'Førde'],
    printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
// console.log(user.printPlacesLived())
// (3) ["Sander has lived in Vassenden", "Sander has lived in Bergen", "Sander has lived in Førde"]

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        })
    }
}
console.log(multiplier.multiply())
// (3) [20, 40, 60]

