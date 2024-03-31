
function swapsCase(string){
    return string.split('').map(char =>{return char ===
        char.toUpperCase()?
        char.toLowerCase():
        char.toUpperCase();
    
    }).join('');
}








