function getUserObject(firstName, lastName, age) {
    const myname = `${firstName} ${lastName}`;
   
    return { name: myname, age };
}

export { getUserObject };
