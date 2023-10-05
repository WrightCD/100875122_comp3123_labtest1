/*
Question One
Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
*/

function lowerCaseWords(mArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mArray)) {
      reject("Not an Array!");
      return;
    }

    const newArray = [];
    mArray.forEach((item) => {
      if (typeof item === "string") {
        newArray.push(item.toLowerCase());
      }
    });

    if (newArray.length > 0) {
      resolve(newArray);
    } else {
      reject("No valid words found in the input array");
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
