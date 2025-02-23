/* ​‌‍‌⁡⁢⁣⁢𝗠𝗮𝘁𝗵 𝗢𝗯𝗷𝗲𝗰𝘁⁡​ */

// ⁡⁣⁣⁡⁣⁢⁢Math Object di JavaScript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika.

// ⁡⁣⁣⁢Properti Math⁡

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI + " ini adalah PI");
console.log(Math.E + " ini dalah niali Eular");

// ⁡⁣⁣⁢Metode Math⁡
console.log(Math.abs(-7) + " membuat nilai menjadi positif"); // membuat nilai negative menjadi positif
console.log(Math.pow(2, 5) + " pemangkatan"); //mempangkatkan
console.log(Math.sqrt(16) + " mengakarkan"); //mengakarkan
console.log(Math.cbrt(8) + " menakarkan pangkat 3"); //mengakarkan pangkat 3
console.log(Math.max(1, 13, 89, 2, 75) + " mencari nilai terbesar"); //mencari nilai terbesar
console.log(Math.min(1, 13, 89, 2, 75) + " mencari nilai terkecil"); //mencari nilai terkecil

// ⁡⁣⁣⁢Pembulatan Angka⁡
console.log(Math.round(3.3) + " membulatkan nilai terdekat"); //membulatkan ke nilai terdekat dari nilai tersebut
console.log(Math.ceil(4.0000001) + " membulatkan ke atas"); //membulatkan ke atas
console.log(Math.floor(3.9) + " membulatkan ke bawah");
console.log(Math.trunc(4.99999) + " mengembalikan nilai sebelum koma"); //menghapus nilai setelah koma

// ⁡⁣⁣⁢Random Number⁡

console.log(Math.round(Math.random() * 100) + " membuat nilai random"); //membuat nilai random antara 0-1 agar nilainya sesuai maka perlu di kalikan
