/* ​‌‍‌⁡⁢⁣⁢Array di JavaScript⁡​ */

// ⁡⁣⁣⁢Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka atau string, dalam satu variabel. Di JavaScript, array dapat menyimpan berbagai tipe data sekaligus dan memiliki indeks yang dimulai dari 0⁡.

//⁡⁣⁣⁢ Membuat Array⁡

// 1. Menggunakan notasi array literal:
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// 2. Menggunakan new Array():

let num = new Array(1, 2, 3, 4, 5);
console.log(num);

// ⁡⁣⁣⁢Mengakses Elemen Array⁡
console.log(fruits[0]);
console.log(fruits[2]);

//  Menambah atau Mengubah Elemen Array
fruits[3] = "Strawberry";
fruits[0] = "Orange";
console.log(fruits);

// ⁡⁣⁣⁢Manipulasi Array⁡ dengan method

let numbers = [1, 2, 3];
console.log(numbers.push(4, 5)); //memasukan nilai kedalam array
console.log(numbers.pop()); //menghapus nilai terakhir
console.log(numbers.shift()); //menghapus nilai pertama
console.log(numbers.unshift(5)); // menambah nilai pertama
console.log(numbers.length); //melihat banyaknya index di array
console.log(numbers.toString()); // mengkonversikan array ke string dengan koma sebagai pembaginya
console.log(numbers.at(2)); // melihat nilai dari index yang di masukan ke parameter
console.log(numbers.join(" * ")); // sama seperti method join tapi dengan pembagi yang di tentukan

/** Array sorting atau mensortir array */
// ada dua bentuk dalam mensortir arrary
//1. array yang berbentuk alpabet
let merekHp = ["samsung", "vivo", "advan"];
console.log(merekHp.sort()); //mengurutkan niai dari a-z
console.log(merekHp.reverse()); // mengurutkan nilai dari z-a

//2. array yang berbentuk numerik
let nilai = [87, 45, 63, 100];
console.log(
  nilai.sort(function (a, b) {
    return a - b;
  })
); // ditambahbkan funsi perbandingan agak nilai 100 tetap menkadi lebih besar dari nilai 45
//sama halnya jika ingin memngurutkan secara terbalik
console.log(
  nilai.sort(function (a, b) {
    return b - a;
  })
); //

let numbers2 = [4, 5];
let newNumber = numbers.concat(numbers2); // menggabungkan nilai dari array numbers dan array numbers2
console.log(newNumber);
newNumber.splice(2, 1, 10); //menghapus index tertentu dan menambahkan nilai ke index tersebut
// method splice menerima parameter index keberapa yang mau di apus dan berapa index yang mau di hapus parameter terakhir akan menggantikakn index yang sudah di hapus
console.log(newNumber);
console.log(newNumber.indexOf(10)); //mengecek index ke berapa nilai tersebut
console.log(newNumber.includes(5)); //memastikan apakah nilai yang di masukan ada di dalam array menghasilkan boolean true dan false
console.log(newNumber.slice(2, 4)); // menhapus nilai index ke berapa dan berapa index yang akan di hapus

// Multidimensional Array (Array of Arrays)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]);
