// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
    var luas = Math.PI * Math.pow(jariJari, 2);
    return luas;
}

// Menggunakan fungsi untuk menghitung luas lingkaran
var jarijariLingkaran = 8;
var hasilLuas = hitungLuasLingkaran(jarijariLingkaran);

// Menampilkan hasil perhitungan
console.log("Luas lingkaran dengan jari-jari " + jarijariLingkaran + " adalah: " + hasilLuas);
