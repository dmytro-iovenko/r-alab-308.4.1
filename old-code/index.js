// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let output = "";

for(let i = 0; i < csv.length; i++) {
  if (csv[i] === '\r') {
    i++;
  } else if (csv[i] === '\n') {
    let cell1, cell2, cell3, cell4;
    let current_cell = "";
    let counter = 1;
    for(let j = 0; j < output.length; j++) {
      if (output[j] === ",") {
        switch(counter){
          case 1:
            cell1 = current_cell;
            break;
          case 2:
            cell2 = current_cell;
            break;
          case 3:
            cell3 = current_cell;
            break;
          default:
            break;
        }
        counter++;
        current_cell = "";
      } else {
        current_cell += output[j];
      }
    }
    cell4 = current_cell;
    console.log(cell1, cell2, cell3, cell4);
    output = "";
    i++;
  } else {
    output += csv[i];
  }
}