const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const csv =
//   "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const rows = csv.split("\n");

//// Part 1: Refactoring Old Code
console.log("\nPart 1: Refactoring Old Code");

for (let row of rows) {
  let cell1, cell2, cell3, cell4;
  const cells = row.split(",");
  let counter = 1;
  for (let cell of cells) {
    switch (counter) {
      case 1:
        cell1 = cell;
        break;
      case 2:
        cell2 = cell;
        break;
      case 3:
        cell3 = cell;
        break;
      case 4:
        cell4 = cell;
        break;
      default:
        break;
    }
    counter++;
  }
  console.log(cell1, cell2, cell3, cell4);
}

//// Part 2: Expanding Functionality
console.log("\nPart 2: Expanding Functionality");

// Declare a variable that stores the number of columns in each row of data within the CSV.
// This should be calculated dynamically based on the first row of data.
let num_columns;
num_columns = rows[0].split(",").length;
// console.log(num_columns);

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
const csvArr = [];
rows.forEach((row) => csvArr.push(row.split(",")));
console.log("Store results in a two-dimensional array:");
console.log(csvArr);

//// Part 3: Transforming Data
console.log("\nPart 3: Transforming Data");

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
const header = csvArr.shift();
// console.log(header)
// console.log(csvArr);
const csvObjArr = [];
csvArr.forEach((rowArr) => {
  let rowObj = {};
  rowArr.forEach((cell, i) => {
    rowObj[header[i].toLowerCase()] = cell;
  });
  csvObjArr.push(rowObj);
});
console.log(
  "Create an object where the key of each value is the heading for that value's column:"
);
console.log(csvObjArr);

//// Part 4: Sorting and Manipulating Data
console.log("\nPart 4: Sorting and Manipulating Data");

//1. Remove the last element from the sorted array.
console.log("1. Remove the last element from the sorted array:");
let lastElement = csvObjArr.pop();
console.log("removed element:", lastElement);
console.log("updated array:", csvObjArr);

//2. Insert the following object at index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
console.log("2. Insert the following object at index 1:");
console.log('{ id: "48", name: "Barry", occupation: "Runner", age: "25" }');

let newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
csvObjArr.splice(1, 0, newObj);
console.log("updated array:", csvObjArr);

//3. Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
console.log("3. Add the following object to the end of the array:");
console.log('{ id: "7", name: "Bilbo", occupation: "None", age: "111" }');

let anotherNewObj = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
csvObjArr.push(anotherNewObj);
console.log("updated array:", csvObjArr);

// Use the values of each object within the array and the array’s length property
// to calculate the average age of the group.
// This calculation should be accomplished using a loop.
console.log("Calculate the average age of the group:");

let totalCount = csvObjArr.length,
  totalAge = 0;
csvObjArr.forEach((obj) => (totalAge += Number(obj.age)));
// console.log(totalAge); // 254
let avgAge = Math.round(totalAge / totalCount);
console.log("average age:", avgAge); // 51

//// Part 5: Full Circle
// transform the final set of data back into CSV format.
console.log("Part 5: Transform the final set of data back into CSV format:");
let newHeader = [],
  newCsvArr = [];
// loop through first object to create a new header;
for (let el in csvObjArr[0]) {
  newHeader.push(el);
}
newCsvArr.push(newHeader.join(","));
// console.log(newCsvArr)

// loop through array and collect data from each object in order of headers;
for (let obj of csvObjArr) {
  const newRowArr = [];
  newHeader.forEach((header) => newRowArr.push(obj[header]));
  newCsvArr.push(newRowArr.join(","));
}
// console.log(newCsvArr)

// join new array to csv string.
// escape '\n' to see it in the result string
let newCsv = newCsvArr.join("\\n");
console.log("transformed csv string:", newCsv); //id,name,occupation,age\n42,Bruce,Knight,41\n48,Barry,Runner,25\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n7,Bilbo,None,111
