function mostRepetitions(string1, string2, letter) {
    let cnt1=0,cnt2=0;
    for (let i=0;i<string1.length;i++){
        if(string1[i]===letter){
            cnt1++;
        }
    }
     for (let j=0;j<string2.length;j++){
        if(string2[j]===letter){
            cnt2++;
        }
    }
    if(cnt1 >= cnt2) {return string1}
    else {return string2}
}

export { mostRepetitions };
