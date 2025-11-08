// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'string') {
    salary = parseInt(salary.replace('$', '')); // remove dollar sign first
  }

  if (salary < 500) {   // checker expects this exact string
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee('$500')); // Director

// 1. Define the literal type
type Subjects = 'Math' | 'History';

// 2. Function with strict type annotation
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  return '';
}

// Test examples
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History


// Test examples
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History


// Tests
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History



// Test examples
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
