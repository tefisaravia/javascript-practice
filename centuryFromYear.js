/*
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.
*/

function solution(year) {
  let yearMin = 1;
  let yearMax = 100;
  let century = 1;
  
  if (year >= yearMin && year <= yearMax ){
      return century;
      }
  century = Math.ceil(year/100)
  return century;
}