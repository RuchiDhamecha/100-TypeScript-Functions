function everyNPositions(message, step) {
    let output = "";
    for(let i=0;i<message.length;i++){
        if(i % step === 0){
            output += message[i]
        }
    }
    return output
}

export { everyNPositions };