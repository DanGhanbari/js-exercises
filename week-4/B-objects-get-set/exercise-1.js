/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown"
};

// YOUR CODE GOES BELOW HERE

// console.log(kitten.ageMonths);
// console.log(kitten.furColour);
// console.log(kitten.isFemale);
for (property in kitten) {
  console.log(kitten[property]);
}
// YOUR CODE GOES ABOVE HERE
