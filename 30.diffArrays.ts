function diffArrays(numbers1, numbers2) {
    const difference1 = numbers1.filter(num => !numbers2.includes(num));

  const difference2 = numbers2.filter(num => !numbers1.includes(num));

  return difference1.concat(difference2);
}

export { diffArrays };
