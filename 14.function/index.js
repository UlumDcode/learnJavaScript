/* ​‌‍‌⁡⁢⁣⁢Function di Javascript⁡​ */

// ⁡⁣⁢⁢Function ⁡⁣⁣⁢adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali. Function mempermudah pengorganisasian kode dengan membagi tugas besar menjadi tugas-tugas kecil yang lebih terstruktur.⁡

// ⁡⁣⁢⁢Membuat Function,⁡ ⁡⁣⁣⁢untuk membuat function, gunakan kata kunci function diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dijalankan.⁡

/* 

    ⁡⁣⁢⁢function⁡ ⁡⁣⁣⁢namaFunction⁡(⁡⁣⁢⁣parameter1, parameter2, ...⁡) ⁡⁢⁣⁢{⁡
        ⁡⁢⁢⁢// Blok kode yang akan dijalankan⁡
    ⁡⁢⁣⁢}⁡

*/

function sapaPengguna(nama = "anonym") {
  console.log(`Halo, ${nama} !`);
}
//nama dalam kurung function sapaPengguna adalah sebuah parameter

function sapaSemua() {
  console.log("Halo semuanya");
}

// ⁡⁣⁢⁢Memanggil Function,⁡ ⁡⁣⁣⁢Untuk menjalankan function, cukup panggil dengan menyebutkan nama function diikuti dengan tanda kurung, serta masukkan nilai untuk parameternya (jika ada).⁡

sapaPengguna("Budi");
sapaSemua();

// ⁡⁣⁢⁢Parameter dan Argumen,⁡ ⁡⁣⁣⁢Parameter adalah variabel yang didefinisikan dalam deklarasi function. Argumen adalah nilai yang diberikan saat function dipanggil⁡

function tambah(a, b) {
  console.log(a + b);
}

tambah(3, 5);
tambah(100, 204);

// ⁡⁣⁣⁢Di sini, a dan b adalah parameter, sedangkan 5 dan 3 adalah argumen.⁡

// ⁡⁣⁢⁢Return Statement,⁡ ⁡⁣⁣⁢Function dapat mengembalikan nilai menggunakan return. Setelah return dieksekusi, eksekusi function akan berhenti.⁡

function kuadrat(num) {
  if (num > 0) {
    return num * num;
  } else {
    return "angka negatif tidak kami kuadratkan";
  }
}

let kuadrat4 = kuadrat(4);
console.log(kuadrat4);

/* ​‌‍‌⁡⁢⁣⁢𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻𝘀⁡​ */

// ⁡⁣⁣⁢Selain membuat function menggunakan deklarasi (function declaration), Anda juga bisa membuat function menggunakan ekspresi (function expression), di mana function disimpan dalam variabel.⁡

let kali = function (a, b) {
  return a * b;
};

console.log(kali(4, 5));

/* ​‌‍‌⁡⁢⁣⁢Arrow Functions⁡​ */

// ⁡⁣⁢⁢Arrow function⁡ ⁡⁣⁣⁢adalah cara singkat untuk menulis function expression, diperkenalkan di ES6.⁡

// ⁡⁣⁣⁢contoh function expression ⁡
// let kali = function(a,b){
//     return a*b
// }
// console.log(kali(3,5))

// ⁡⁣⁣⁢contoh arrow function⁡

let Kali = (a, b) => a * b;

console.log(Kali(3, 5));
