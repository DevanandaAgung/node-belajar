// 1.toUpperCase() dan 2.toLowerCase()
let text = "hello world";
console.log("toUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());

// 3. split() - memecah string menjadi array berdasarkan pemisah
let words = text.split(" "); // ["Hello", "World!"]
console.log("split:", words);

// 4. join() - menggabungkan elemen array menjadi string dengan pemisah yang ditentukan
let joined = words.join(" & "); // ["Hello & World!"]
console.log("join:", joined);// Output: "Hello & World!"

// 5. slice() - Mengambil sebagian elemen array tanpa mengubah array asli
let numbers =[1, 2, 3, 4, 5, 6];
let sliced = numbers.slice(2, 5); //Ambil elemendari indeks 2 sampai 4 (tidak termasuk indeks 5)
console.log("slice:", sliced); // Output: [3, 4, 5]

// 6. splice() - Mengubah array asli (menghapus atau mengganti elemen)
let arrSplice = [1, 2, 3, 4, 5, 6];
arrSplice.splice(3, 2, 99, 100); // Mulai dai Indeks 3, hapus 2 elemen, kemudian sisipkan 99 dan 100
console.log("splice:", arrSplice); // Output: [1, 2, 3, 99, 100, 6]

// 7. map() - Membuat array baru dengan memproses setiap elemen arary asli
let arrMap = [1, 2, 3, 4];
let doubled = arrMap.map(num => num * 2);
console.log("map:", doubled); // Output: [2, 4, 6, 8]

//  8. filter() - Menghasilkan array baru dengan hanya elemen yang memenuhi kondisi tertentu
let arrFilter = [1, 2, 3, 4, 5, 6];
let evenNumbers = arrFilter.filter(num => num % 2 === 0);
console.log("filter:", evenNumbers); // Output: [2, 4, 6]

// 9. reduce() - Mengakumulasi elemen array menjadi satu nilai
let arrReduce = [1, 2, 3, 4];
// Kita hitung jumlah semua elemen array menggunakan reduce()
let sum = arrReduce.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum); //Output: 10

// 10. includes() - Mengecek apakah array atau string mengandung nilai tertentu
console.log("includes (string):", text.includes("World")); // Output: false, karena "World" tidak sama dengan "world"
// Jika ingin pengecekan case-insensitive, bisa ubah ke:
console.log("includes (string, case-insensitive):",text.toLowerCase().includes("world"));// Output: true
console.log("includes (array):", arrReduce.includes(3)); // Output: true