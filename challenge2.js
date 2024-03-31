function createArray(beginning,end){
    let result=[]
    for (let i = beginning ; i <= end; i++){ result.push(i)};
    return result;
}

console.log(createArray(1,4));