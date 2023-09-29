/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest 
so that each statue will be bigger than the previous one exactly by 1. 
He may need some additional statues to be able to accomplish that. 
Help him figure out the minimum number of additional statues needed.
*/

function makeArrayConsecutive(statues) {
  let sortedStatues = statues.sort(function (a, b) { return a - b });
  let counter = 0;
  for (let i = 1; i < sortedStatues.length; i++ ) {
    let difference = sortedStatues[i] - sortedStatues[i-1];
     if (difference > 1) {
        counter = counter + (difference - 1);
     }
  }
  return(counter);
}

let example = [6,2,3,8];
console.log(makeArrayConsecutive(example));