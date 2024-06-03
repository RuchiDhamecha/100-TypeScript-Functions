function addDays(initialDate, daysCount) {

    const newDate = new Date(initialDate.getTime());

    newDate.setDate(newDate.getDate() + daysCount);

    return newDate;
}

export { addDays };
