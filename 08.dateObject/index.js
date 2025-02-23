/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */

// ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// Tanggal dan waktu saat ini
let now = new Date(); // mengambil waktu saat ini
console.log(`tanggal sekarang = ${now}`);

// Menggunakan string
let specificDate = new Date("August 20, 2024 10:30:00");
console.log(`spesfific date dengan string = ${specificDate}`);

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
// Bulan di JavaScript di hitung dari 0
let customDate = new Date(2024, 7, 20, 10, 30);
console.log(`custom date dengan parameter : ${customDate}`);

// ⁡⁣⁣⁢Mengambil Informasi Tanggal dan Waktu⁡
let today = new Date();
console.log(`mengambil tahun : ${today.getFullYear()}`);
console.log(`mengambil bulan : ${today.getMonth()}`);
console.log(`mengambil tanggal : ${today.getDate()}`);
console.log(`mengambil hari : ${today.getDay()}`);
console.log(`mengambil jam : ${today.getHours()}`);
console.log(`mengambil menit : ${today.getMinutes()}`);
console.log(`mengambil second : ${today.getSeconds()}`);
console.log(`mengambil milisecond : ${today.getMilliseconds()}`);
console.log(`mengambil semua milisecond : ${today.getTime()}`); // di hitung dari tahun 1970

// ⁡⁣⁣⁢Mengatur Tanggal dan Waktu⁡

let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);

// Mengatur bulan menjadi Desember (11, karena bulan dimulai dari 0)
date.setMonth(11);

// Mengatur hari menjadi 25
date.setDate(29);
console.log(date);

// ⁡⁣⁣⁢Perhitungan Waktu dengan Date Object⁡
let startDate = new Date(2024, 7, 20, 10, 30);
let endDate = new Date(2024, 8, 3, 10, 30);

let diff = endDate - startDate;
console.log(diff); //miliseconds

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);
