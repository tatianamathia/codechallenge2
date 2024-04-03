function createArray(beginning,end){
    let result=[]
    for (let i = beginning ; i <= end; i++){ result.push(i)};
    return result;
}
// create array one
console.log(createArray(-4,7));
// create array two
console.log(createArray(4,7))