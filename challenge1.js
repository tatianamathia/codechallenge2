
function swapsCase(string){
    return string.split('').map(char =>{return char ===
        char.toUpperCase()?
        char.toLowerCase():
        char.toUpperCase();


    //join the splits together
    }).join('');
}
swapsCase("The Quick Brown Fox")
// exaple usage
console.log(swapsCase("The Quick Brown Fox"))






