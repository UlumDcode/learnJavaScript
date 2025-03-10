/* ​‌‍‌⁡⁢⁣⁢IIFE (Immediately Invoked Function Expression)⁡​ */

// ⁡⁣⁢⁢IIFE⁡ ⁡⁣⁣⁢adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk mengisolasi variabel dan mencegahnya mengganggu kode lain.⁡
(function () {
  console.log("IIFE di panggil");
})();

/** Struktur IIFE */
// (function () {
//  return
// })();
const appConfig = (function () {
  const apiKey = "1234";
  const apiURL = "https://api.example.com";

  return {
    getApiKey: function () {
      return apiKey;
    },
    getApiURL: function () {
      return apiURL;
    },
  };
})();

console.log(appConfig.getApiKey());
console.log(appConfig.getApiURL());

// contoh lain dari IIFE
const auth = (function () {
  const username = "budi";
  const password = "naruto";
  return {
    getUsername: function () {
      return username;
    },
    getPassword: function () {
      return password;
    },
  };
})();
console.log(auth.getUsername());
console.log(auth.getPassword());
