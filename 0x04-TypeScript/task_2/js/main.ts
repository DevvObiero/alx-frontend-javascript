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
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'string') {
    salary = parseInt(salary.replace('$', ''));
  }

  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type literal
type Subjects = 'Math' | 'History';

// teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History'; // covers 'History'
}

// Example usage
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee('$500')); // Director

console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
