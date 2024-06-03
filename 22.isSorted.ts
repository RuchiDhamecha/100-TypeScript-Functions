function isSorted(numbers) {

    let isGreater = numbers[0] > numbers[1]; 
  
    for (let i = 2; i < numbers.length; i++) {
      if ((isGreater && numbers[i - 1] < numbers[i]) ||
          (!isGreater && numbers[i - 1] > numbers[i])) {
        return false;
      }
    }
  
    return true;
  }
  
  export { isSorted };
  