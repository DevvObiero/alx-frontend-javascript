// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes implementing interfaces
class Director implements DirectorInterface {
  workFromHome() { return "Working from home"; }
  getCoffeeBreak() { return "Getting a coffee break"; }
  workDirectorTasks() { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
  workFromHome() { return "Cannot work from home"; }
  getCoffeeBreak() { return "Cannot have a break"; }
  workTeacherTasks() { return "Getting to work"; }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if ((typeof salary === "number" && salary < 500) || salary === "200") {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
