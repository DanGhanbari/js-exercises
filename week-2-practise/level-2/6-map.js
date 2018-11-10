// You have been given an array of percetages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

const percentages = [1, 23, 92, 18];
function percentagesFormatted() {
  const percentageArray = percentages.map(function(x) {
    return x + "%";
  });
  return percentageArray;
}
console.log(percentagesFormatted(percentages));

/* 
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
