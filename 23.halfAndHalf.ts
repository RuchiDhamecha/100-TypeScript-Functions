function halfAndHalf(text) {
    let middleIndex= text.length/2
    return text.slice(0, middleIndex).toLowerCase() + text.slice(middleIndex).toUpperCase();
}

export { halfAndHalf };
