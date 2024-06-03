function getLongestString(arrayOfStrings) {
    if (arrayOfStrings.length === 0) {
      return "";
    }
  
    let longestString = arrayOfStrings[0];
  
    for (let i = 1; i < arrayOfStrings.length; i++) {
      const currentString = arrayOfStrings[i];
  
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
    }
  
    return longestString;
  }