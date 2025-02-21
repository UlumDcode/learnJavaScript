/** Type conversion adalah cara merubah tipe data dari sebuah value */

/** Implisit Conversion */
// conversi tipe data yang otomatis dilakukan oleh javaScript

let hasil = "5" + 10;
// tipe data number dari value 10 akan otomatis di rubah menjadi string oleh javaScript karena javaScript membaca '+' dari operator tersebut sebagai concatenator
// beda hasilnya jika
let result = "10" - 5;
// maka javaScript akan membaca operator tersebut sebagai pengurangan

/** Explisit Converion*/
/** Cara merubah tipe data secara manualdi lakukan secara mandiri */

let num = 100;
let string = "5";
const string1 = num.toString();
const num1 = parseInt(string);
console.log(typeof string1);
console.log(typeof num1);
