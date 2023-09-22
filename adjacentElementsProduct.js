/*
Given an array of integers, find the pair of adjacent 
elements that has the largest product and return that product.
 */
function solution(inputArray) {
  //loop through the array to multiply adjacent elements 
  let productArray = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    let value1 = inputArray [i];
    let value2 = inputArray [i+1];
    let product = value1 * value2;
    //store each value in a new array 
    productArray.push(product);
  }
  //find the highest value of the product array
  let highestProduct = Math.max.apply(null, productArray);
  return (highestProduct);
}

/*
Given an array of integers, find the pair of adjacent 
elements that has the largest product and return the two 
elements that produced that product.
 */

function solutionMore (inputArray) {
  //loop through the array to multiply adjacent elements 
  let productArray = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    let value1 = inputArray [i];
    let value2 = inputArray [i+1];
    let product = value1 * value2;
    //store each value in a new array 
    productArray.push(product);
  }
  //find the highest value of the product array
  let highestProduct = Math.max.apply(null, productArray);
  //find highest value index within the product array
  function checkProduct(productElement) {
    return productElement == highestProduct;
  }
  let highestProductIndex = productArray.findIndex(checkProduct);
  
  //use this to determine the index of the 2 elements from the inputArray
  //the same key plus the next one 
  console.log("The two elements are", 
  inputArray[highestProductIndex], 
  "and",
  inputArray[highestProductIndex+1]);
}

let testArray = [2, 3, 4, 5];
solution(testArray);
solutionMore(testArray);
