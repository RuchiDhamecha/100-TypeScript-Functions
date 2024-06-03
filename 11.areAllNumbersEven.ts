function areAllNumbersEven(numbers) {
    if(numbers.length === 0) return true;
     for (const number of numbers) {
    if (number % 2 !== 0) {
      return false;
    }
  }
  return true;
}

export { areAllNumbersEven };
