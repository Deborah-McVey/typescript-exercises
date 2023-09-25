/* Exercise 3: Interfaces (Folder: Exercise-3)
typescriptCopy code */

interface Vehicle {
    brand: string;
    speed: number;
    brake: string;
    
    accelerate(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    brake: drum,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    }
}

car.accelerate();

/* Use the above interface and object. Add another method in the interface called brake and implement it in the car object. */