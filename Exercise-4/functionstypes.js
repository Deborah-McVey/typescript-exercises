/* Exercise 4: Functions & Types (Folder: Exercise-4)
Write a function greet that takes in a name (string) and returns a greeting (string). */

function greet {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() : string {
        return "Hello, " + this.greeting;
    }
} 