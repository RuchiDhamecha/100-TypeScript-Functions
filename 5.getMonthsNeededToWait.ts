function getMonthsNeededToWait(index1, index2) {
    return (index2 - index1 + 12) % 12
}

export { getMonthsNeededToWait };