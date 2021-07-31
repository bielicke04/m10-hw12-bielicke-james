// YOUR CODE HERE

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        console.log("BEEP BEEP!")
    }
    performMaintenance() {
        setTimeout(() => {
            console.log('maintenance complete')
        }, 3000)
    }
}

var mySweetRide = new Car('pontiac', 'fiero', 1988)
mySweetRide.honk()
mySweetRide.performMaintenance()

