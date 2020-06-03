console.log('ES6 classes is running!')
// JSX

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        //  return 'Hi i am ' + this.name + '!'
        return `Hi i am ${this.name}! `
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if(this.major) {
            description+= ` And has a major in ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if(this.homeLocation) {
            greeting+= ` I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveler('Sander Tonning', 28, 'Jølster')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())
