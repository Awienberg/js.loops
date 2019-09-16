//JS.Loops
//JS.Loops.0 factorial
'use strict'
let n = Number(prompt('Indtast tal'));
const fact = function(n) {
	if (n <= 1)
		return 1;
	else {
		return n * fact (n-1);
	}
}

console.log(fact(n));

//JS.Loops.1 fibonacci
'use strict'
let n = Number(prompt('Indtast tal'));
const fibo = function(n) {
	if (n == 0 || n == 1)
		return n;
	else {
		return fibo(n-1) + fibo(n-2);
	}
}

console.log(fibo(n));

//JS.Loops.2.2 isPrime
'use strict'
let p = Number(prompt('Indtast tal'));
const isPrime = function(p) {
let i = 2;
while(i < p) { 
	if (p % i == 0) 
		return false;
	if (p % i !== 0) 
		return true;
 }
}

console.log(isPrime(p));

//JS.Loops.3 mathematical powers 
'use strict'
let r = Number(prompt('Indtast rod'));
let e = Number(prompt('Indtast tal'));
const pow = function(r, e) {
	if (e <= 1)
		return r;
	else {
		return r * pow(r, e-1); 
	}
}

console.log(pow(r, e));

//JS.Loops.71 Downey: thinkjava
'use strict';
let arr = [10,5,6,3,4,2];
console.log('i = ' + arr);

let arr1 = [15,16,8,4,2];
console.log('i = ' + arr1);

let arr2 = [17,18,9,10,5,6,3,4,2];
console.log('i = ' + arr2);  

const loop = function(n) {
    let i = n;
    while (i > 1) {
        console.log(i);
        if (i % 2 == 0) { //kan tallet divideres med 2. 
            i = i / 2;
        } else {
            i = i + 1; //hvis tallet ikke kan divideres med 2 lægges 1 til.
        }
    }
}

console.log(loop(10)); //ligemeget hvilket tal man sætter ind, vil den altid ende med tallene 4 og 2. 

//JS.Loops.72
'use strict'
let a = Number(prompt('Indtast tal'));
const squareRoot = function(a) {
	while (){
	}
	return ;
}

console.log(squareRoot(a))

//JS.Loops.73
'use strict';
const powi = function(r, e) {
	res = 1;
	while (e > 0) {
		res *= r;
		e -= 1;
	}
	return res;
  } 

  let a = Number(prompt('Indtast rod'));
  let b = Number(prompt('Indtast tal'));
  console.log(powi(a, b));

//JS.Loops.74
'use strict'
let n = Number(prompt('Indtast tal'));
const facti = function(n) {
	res = 1;
	while (n > 0) {
		res *= n; 
		n -= 1;
	}
	return res;
}

console.log(fact(n));

//JS.Loops.75
