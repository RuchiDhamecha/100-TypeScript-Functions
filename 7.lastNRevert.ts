function lastNRevert(text, n) {

    const lastChars = text.slice(-n);
;
    return lastChars.split("").reverse().join("")
}

export { lastNRevert };
