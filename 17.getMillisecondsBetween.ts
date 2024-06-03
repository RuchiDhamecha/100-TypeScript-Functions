function getMillisecondsBetween(date1, date2) {
    return Math.abs(date1.getTime() - date2.getTime())
}

export { getMillisecondsBetween };
