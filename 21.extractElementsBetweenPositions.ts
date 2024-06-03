function extractElementsBetweenPositions(numbers, n, m) {
    let max = Math.max(n,m);
    let min;
    if(max === n) min= m;
    else min = n;
    let arr2=[];
    for(let i=min;i<=max;i++){
        arr2.push(numbers[i]);
    }
    return arr2;
}

export { extractElementsBetweenPositions };
