//fabonacci series

function fabonacci(n) {
    let fabonacci = [0,1];
    for (let i = 2; i < n; i++) {
        let ft = fabonacci[i - 2]
        let lt = fabonacci[i - 1]
        fabonacci[i] = ft + lt
    }
    return fabonacci
}
// console.log(fabonacci(3))
// console.log(fabonacci(5))
// console.log(fabonacci(8))

//factorial of a number

function factorial(n) {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}

// console.log(factorial(4))

//primeNumber 
//optimistic logic : when n=a*b ,one of the two factors is lessthan or equal to squareroot of n
function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true

}
//Big-O=O(sqrt(n))
// console.log(isPrime(23))

//powerOfTwo
// n=8
// 8/2=4
// 4/2=2
// 2/2=1
function powerOfTwo(n) {
    if(n>1){
        while(n > 1){
            if(n%2 !== 0){
                return false ;
            }
            n=n/2 ;
        }
    }
    
    return true ;
}
console.log(powerOfTwo(2)) //true
console.log(powerOfTwo(4)) //true
console.log(powerOfTwo(5)) //false