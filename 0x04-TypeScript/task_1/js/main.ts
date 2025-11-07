// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra attributes like contract
}

// Example Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);

// 2. Director interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. printTeacher function
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test
console.log(printTeacher('John', 'Doe')); // J. Doe

// Student interface for constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Student class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example
const student = new StudentClass({ firstName: "Jane", lastName: "Doe" });
console.log(student.displayName());
console.log(student.workOnHomework());
