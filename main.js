//KATA 1- ADD FUNCTION

function add (x, y) {
    return x+y;
}
console.log(add(2, 4));


//KATA 2- MULTIPLY FUNCTION

function multiply(x, y) {
    let product = 0
    for(let counter = 0; counter < y; counter++){
        
        product = add(product, x) // product + x
        //product initiates '0' from the start
        //When the code executes, the product reassigns to 6
        //The next run, the products assigns 12 and so on until the final product is 24!
    }
    return product
    
}

console.log(multiply(6, 4));


//KATA 3- POWER FUNCTION

function power(x, n) {
    let pwr = 1
    for(let counter = 0; counter < n; counter++) {
        pwr = multiply(pwr, multiply(x, 1))
        //Same as Kata 2, the first run of code executes 2*2
        //Code keeps running until the answer is 256!
    }

    return pwr 
}

console.log(power(2, 8));


//KATA 4- FACTORIAL FUNCTION
  
function factorial(n) {

    let fact = n
     for(let counter = 1; counter < n; counter++) {

        fact = multiply(fact, multiply(counter, 1))
        //The first run of code MUST make the factorial answer '20'!

    }

    return fact
   
}

console.log(factorial(5))




//KATA BONUS- FIBONACCI FUNCTION

function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    let total = num2;
    for (counter = 0; counter < n; counter ++) {
        total = add(total, add(num2, 1))
        
    }
    return total;

}
console.log(fibonacci(8));





//*Citing Desmond Obiri-Yeboah for tutoring me on Functions.