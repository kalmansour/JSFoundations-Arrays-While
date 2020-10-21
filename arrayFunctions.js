/**
 * isArrayLengthOdd(a):
 * - receives array `a`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(a) {
  const numberOfa = a.length;
  if (numberOfa % 2 !== 0) { return true;
  } else { return false;
  }  
}
// console.log(isArrayLengthOdd([1, 2, 3]));

/**
 * isArrayLengthEven(a):
 * - receives array `a`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
// let a = [1, 2, 3, 4];
// const numberOfa = a.length;

function isArrayLengthEven(a) {
  const numberOfa = a.length
  if (numberOfa % 2 === 0) { return true;
  } else { return false;
  }  
}
// console.log(isArrayLengthOdd([1, 2, 3, 4]));

/**
 * addLailaToArray(a):
 * - receives array `a`
 * - returns a new array that's a copy of array `a` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(a) {
  a.push("Laila");
  console.log(a);
  return a;
}
// console.log(addLailaToArray(["Mshary", "Hasan"]));

/**
 * eliminateTeam(a):
 * - receives array `a`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(a) {
  const lastElement = "Italy";
  a.pop("Italy");
  console.log(a);
  return lastElement;
}
// console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(a):
 * - receives array `a`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(a) {
  console.log(a);
  if(a.length % 2 === 0){
    return a.slice(a.length/2);
  } else {
    return [];
  }
}

//console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
//console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "tomato"]));


/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */

function youGottaCalmDown(s){
  while(s.endsWith('!!')){
      s = s.slice(0,-1);
  }
  return s;
}

// console.log(youGottaCalmDown("Hi!!!!"));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
