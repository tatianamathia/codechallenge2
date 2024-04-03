function isPrime(num){
    if (num <= 1){
        return false;
    }
    if (num===2){
        return true;
    }
    if (num % 2 ===0){
        return false;
    }
    // for loop
    for (let i =3; i <= Math.sqrt(num);i += 2){
        if (num % i === 0){
            return false;
        }
    }
    return true
}
function filterPrimes(arr){
    return arr.filter(isPrime)
}

// example usage

const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const primeNumbers = filterPrimes(myArray);
console.log(primeNumbers);