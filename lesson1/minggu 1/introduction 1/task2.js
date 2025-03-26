function hitungRataRataUN(nilaiBI, nilaiBIng, nilaiMTK, nilaiIPA) {
  // 1. Validasi awal: pastikan nilai-nilai terisi tidak kosong
  if (
    nilaiBI === "" ||
    nilaiBIng === "" ||
    nilaiMTK === "" ||
    nilaiIPA === ""
  ){
    console.log("Error: Semua nilai harus diisi");
    return;
  }
  // 2. Ubah ke number agar bisa dihitung 
    let nBI = parseFloat(nilaiBI);
    let nBIng = parseFloat(nilaiBIng);
    let nMTK = parseFloat(nilaiMTK);
    let nIPA = parseFloat(nilaiIPA);

    // 3. pastikan semua nilai adalah angka (bukan teks/huruf)
    if (isNaN(nBI) || isNaN(nBIng) || isNaN(nMTK) || isNaN(nIPA)) {
      console.log("Error: Nilai harus berupa angka!");
      return;
    }

    // 4. Patikan nilai berada dalam rentang 0 - 100
    if (
      nBI < 0 || nBI > 100 ||
      nBIng < 0 || nBIng > 100 ||
      nMTK < 0 || nMTK > 100 ||
      nIPA < 0 || nIPA > 100
    ){
      console.log("Error: Nilai harus di antara 0 sampai 100!");
      return;
    }

    // 5. Hitung rata-rata
    let rataRata = (nBI + nBIng + nMTK + nIPA) / 4;

    // 6. tentukan grade
    let grade = "";
    if (rataRata >= 90 && rataRata <= 100) {
      grade = "A";
    } else if (rataRata >= 80 && rataRata < 90) {
      grade = "B";
    } else if  (rataRata >= 70 && rataRata < 80) {
      grade = "C";
    } else if (rataRata >= 60 && rataRata < 70) {
      grade = "D";
    } else {
      grade = "E";
    }

     // 7. Tampilkan hasil dengan template literal yang benar
  console.log(`Nilai Bahasa Indonesia: ${nBI}`);
  console.log(`Nilai Bahasa Inggris  : ${nBIng}`);
  console.log(`Nilai Matematika      : ${nMTK}`);
  console.log(`Nilai IPA             : ${nIPA}`);
  console.log("--------------------------------");
  console.log(`Rata-rata nilai       : ${rataRata}`);
  console.log(`Grade                 : ${grade}`);
}

// Contoh pemanggilan fungsi
// (Biasanya nilai akan berasal dari input user di form atau promp)
hitungRataRataUN("90", "85", "92", "88");