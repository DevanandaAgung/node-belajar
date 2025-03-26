// Ubah nilai ini untuk mengatur ukuran persegi
const printSquare = 6;

// Fungsi untuk mencetak persegi bolong
function printHollowSquare(size) {
  // Validasi: Pastikan size adalah angka
  if (typeof size !== "number" || isNaN(size)) {
    console.log("Data harus number");
    return;
  }

  // Jika ukuran kurang dari 2, cukup cetak satu bintang
  let topLine = "* ".repeat(size).trim();

  // Cetak baris pertama
  console.log(topLine);

  // 2. Buat baris tengah (dari baris ke-2 sampai ke-(size-1))
  for (let i = 1; i < size - 1; i++) {
    let middleLine = "* " + "  ".repeat(size -2) + "*"; // Bintang pertama
    console.log(middleLine);
  }

  // 3. Cetak baris terakhir (sama dengan baris pertama), jika size > 1
  if (size > 1) {
    console.log(topLine);
  }
}

// Panggil fungsi untuk mencetak persegi
printHollowSquare(printSquare);
