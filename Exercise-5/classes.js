/* Exercise 5: Classes with TypeScript (Folder: Exercise-5)
Objective: Create a class named Student in TypeScript. The class should define certain properties and methods. 

Properties:
studentName: string
studentAge: number
studentGrade: number
Constructor:
The constructor should take in the above three properties when instantiating a new student object.
Methods:
displayInfo(): Log the student's name, age, and grade to the console.
isPassing(gradeThreshold: number): Takes in a grade threshold and returns a boolean indicating if the student's grade is above the threshold.
Starter Code:

typescriptCopy code */

interface Student {
    studentName: string;
    studentAge: number;
    studentGrade: number;
  }
   
  class Student {
    studentName: "Deborah",
    studentAge: 24,
    studentGrade: 98,
   
    constructor(StudentName: string, studentAge: number, studentGrade: number) {
      this.studentName = "Deborah",
      this.studentAge = 24,
      this.studentGrade = 98,
    displayInfo () {
    return this.studentName + "," +this.StudentAccount + "," +this.studentGrade;
    }

    switch (isPassing) {
        case studentGrade >= 70:
            console.log("pass");
            break;
        case studentGrade < 70:
            console.log("fail");
    }
    };
   
  const user: User = new StudentAccount("Murphy", 21, 78);

    // Define the properties here
    
    // Define the constructor here

    // Define the displayInfo method here

    // Define the isPassing method here

// Instantiate a new student object and call the methods to test your class

/* With this, students can fill in the class details using the information provided. */