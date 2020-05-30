function add (x, y) {
    return x+y;
}
console.log(add(9, 8));


function multiply(x, y) {
    let product = 0
    for(let counter = 0; counter < y; counter++){
        product + x
        product = add(product, x) // product + x
        
    }
    return product
    
}

console.log(multiply(6, 9));


function power(x, n) {
    let expo = 1
    for(let counter = 0; counter < n; counter+= 1){
        expo *= multiply(x, 1);    
    }

    return expo
}

console.log(power(2, 8));



function containsVowel (string) {
      return string.includes('a')
         ||  string.includes('e')
         ||  string.includes('i')
         ||  string.includes('o')
         ||  string.includes('u')
}

    console.log(containsVowel('ass'))
    console.log(containsVowel('effer'))
    console.log(containsVowel('iss'))
    console.log(containsVowel('ool'))
    console.log(containsVowel('upid'))
    console.log(containsVowel('wxyz'))