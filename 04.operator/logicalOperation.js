/* Comparison Operator */
/** membandingkan value dan menghasilkan boolean true atau false */

// == mengecek atau membandingkan persamaan nilai

let a = "5";
let b = 5;

console.log(a == b); //Output : true

// === mengecek atau membandingkan persamaan nilai dan tipe data

let c = "5"; //string
let d = 5; //number

console.log(c === d); //Output : false

// != mengecek ketidaksamaan nilai dari variable

let e = "5"; //string
let f = 5; //number

console.log(e != f); //Output : false

// !== mengecek atau membandingkan ketidaksamaan nilai dan tipe data variable

let g = "5"; //string
let h = 5; //number

console.log(g !== h); //Output : true

// > mengecek apakah variable satu lebih besar dari variable lainnya

let i = 7;
let j = 5;

console.log(i > j); //Output: true

// >= mengecek apakah variable satu lebih besar atau sama dari variable lainnya

let k = 5;
let l = 5;

console.log(k >= l); //Output: true

// <  mengecek apakah variable satu lebih kecil dari variable lainnya
let m = 4;
let n = 5;

console.log(m < n); //Output: true

// <= mengecek apakah variable satu lebih kecil atau sama dari variable lainnya

let o = 5;
let p = 5;

console.log(o <= p); //Output: true

/* Operator Logika */

// And && Operator
let q = true;
let r = false;
let result = q && r;

console.log(result);

// Or Operator ||
let s = true;
let t = false;
let orResult = s || t;

console.log(orResult);

// not operator !
let u = true;
let notResult = !u;

console.log(notResult);
