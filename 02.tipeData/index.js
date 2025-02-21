/* Tipe Data Primitive*/
/** tipe data yang punya valuenyay sendiri di dalam memori */

// String
const nama = "Ulum";

// Number
const age = 24;

// Boolean
const pria = true;

// Undifine
let x;

// Null
const person = null;

// Symbol
const symbol1 = Symbol("description 1");

// BigInt
const bigint1 = 27864816487632487263476n;

/*Tipe data References*/
/** tipe data yang tidak  memiliki valuenya sendiri di memori tipe data ini saling mengarah ke satu alamat yang sama di memori */

// Object
const people = {
  nama: "Ulum",
  umur: 26,
  negara: "Indonesia",
};

// Array
const buah = ["apel", "jeruk", "mangis"];

// function
function sayHello() {
  return "Hello from function";
}

const output = sayHello;

console.log(output, typeof output);
