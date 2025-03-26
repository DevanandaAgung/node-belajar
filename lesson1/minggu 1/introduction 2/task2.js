// Data nama
const nameList = [
  "Abigail", "Alexander", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deidre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
];

// Callback function untuk menampilkan hasil
function showResult(result) {
  console.log(result);
}

/**
 * Fungsi searchName
 * @param {string} keyword - Kata kunci yang ingin dicari
 * @param {number} limit - Batas jumlah hasil yang ditampilkan
 * @param {function} callback - Fungsi callback untuk memproses atau menampilkan hasil
 */
function searchName(keyword, limit, callback) {
//  1. Validasi tipe data
if (typeof keyword !== "string" || typeof limit !== "number") {
  return console.log("Keyword harus string dan limit harus number!");
}
// 2. Filter nama yang mengandung keyword (case-insensitive)
const filteredName = nameList.filter((name) => {
  return name.toLowerCase().includes(keyword.toLowerCase());
});

// 3. Batasi jumlah hasil sesuai limit
const limitedNames = filteredName.slice(0, limit);

// 4. Panggil callback dengan hasil
callback(limitedNames);
}

// Contoh pemanggilan fungsi 
searchName("an", 3, showResult);