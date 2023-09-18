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