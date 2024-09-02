class Animal {
    constructor() {
        this.nodegs = 4; // Assuming you meant "legs"
    }

    print_legs() {
        console.log(this.nodegs);
    }
}

// Create an instance of the Animal class
const animal = new Animal();
animal.print_legs(); // Output: 4

////////
const vehicle = {
    vname: "car",
    tyres: 4,
    print_tyres() {
        console.log("No of tyres are", this.tyres);
    }
};

vehicle.print_tyres(); 

/////