/* 
A 1-interesting polygon is just a square with a side of length 1. 
An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
and appending 1-interesting polygons to its rim, side by side. 
For n = 2, the output should be
solution(n) = 5;
For n = 3, the output should be
solution(n) = 13.
*/
function shapeArea (n) {
  let area = 1;
  if (n == 1) {
    area = 1;
  } else {
    squareNumber = Math.pow(n, 2);
    previousNumber = n - 1;
    previousSquare = Math.pow(previousNumber, 2);
    area = squareNumber + previousSquare;
  }
  return area;
}
test = shapeArea(5);
console.log(test);