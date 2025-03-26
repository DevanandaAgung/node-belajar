// Data awal
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcose: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Menggunakan spread operator untuk membuat objek baru dengan properti yang diubah dan ditambah
let newData = {
  ...data,
  name: "Nama Anda",
  email: "emailanda@example.com",
  hobby: "Membaca",
};

// menggunakan destructing untuk mengambil nilai street dan city dari address
const {
  address: { street, city },
} = newData;

// menampilkan data yang sudah dimodifikasi
console.log(
  `name: ${newData.name}
   email: ${newData.email}
   street: ${street}
   city: ${city}
  `);

// Menampilkan street dan city
console.log(street, city);

