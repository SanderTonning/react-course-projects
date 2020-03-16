// arguments objects - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);     (when written with arrowfunction you cannot log arguments anymore!!!)
    return a + b;
}
//console.log(add(55,1));


// this keyword - no longer bound

const user = {
    name: 'Sander',
    cities: ['Vassenden', 'Førde', 'Moskog'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30],
    mulitplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.mulitplyBy);
    }
}
console.log(multiplier.multiply());  