function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi nilaiAwal harus lebih kecil dari nilaiAkhir
  if (nilaiAwal >= nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
    return;

  }

  // Validasi panjang dataArray harus lebih dari 5
  if (dataArray.length <= 5) {
    console.log("Panjang dataArray harus lebih dari 5");
      return;

  }

  // Filter angka yang berada di antara nilaiAwal dan nilaiAkhir
  let filteredArray = dataArray.filter(num => num > nilaiAwal && num < nilaiAkhir);

  // jika tidak ada nilai yang memenuhi kriteria, tampilkan pesan
  if (filteredArray.length === 0) {
    console.log("Nilai tidak ditemukan");
    return;

  }

  // Urutkan hasil filter secara asending 
  filteredArray.sort((a, b) => a - b);

  // Cetak hasil akhir ke console
  console.log(filteredArray);
}

// contoh pengujian
SeleksiNilai(5, 20, [2, 25, 4, 14, 17,,30, 8]); //Output: [8, 14, 17]
SeleksiNilai(5, 3, [2, 25, 4, 14, 17, 30, 8]); //Output: "Nilai akhir harus lebih besar dari nilai awal"
SeleksiNilai(4, 17, [2, 25, 4]); //Output: "Jumlah angka dalam dataArray lebih besar dari 5"
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // Output: "Nilai tidak ditemukan"
