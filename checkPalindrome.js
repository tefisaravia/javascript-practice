function solution(inputString) {
    if (inputString !== null && inputString.length >= 1) {
        inputString.toLowerCase("");
        let splitString = inputString.split("");
        let reverseArray = splitString.reverse("");
        let joinArray = reverseArray.join("");
        console.log(joinArray);
        if (inputString === joinArray){
            return true;
        }
        else {
            return false;
        }
    }
  }

