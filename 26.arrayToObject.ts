function arrayToObject(strings) {
    let result = {};
   for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];

    if (result.hasOwnProperty(currentString)) {
      continue; 
    }
    result[currentString] = i;
  }
    return result;
}

export { arrayToObject };
