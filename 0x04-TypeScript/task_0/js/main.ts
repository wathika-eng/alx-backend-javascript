//create the student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create the student array
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "California",
};
const studentsList: Array<Student> = [student1, student2];

// create the table
const table = document.createElement("table");
// document.body.appendChild(table);
// render the table and for each element in the array, create a row and add the data to the row
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  table.appendChild(row);
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  row.appendChild(cell1);
  row.appendChild(cell2);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});
