// create a teacher interface with  optional extra property
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// create a director interface with the teacher interface as an extension
interface Directors extends Teacher {
  numberOfReports: number;
}

// create a printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// implement the printTeacher function
export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string,
): string {
  return `${firstName[0]}. ${lastName}`;
};

// constructor interface for the Student class
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// interface to implement the Student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// create a Student class
class StudentClass implements StudentClassInterface {
  // properties
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // method that returns a string
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
