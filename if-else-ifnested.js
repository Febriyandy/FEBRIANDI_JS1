
var nilaiUjian = 70;

// Contoh if, else untuk mengevaluasi nilai
if (nilaiUjian >= 90) {
    console.log("Selamat! Anda mendapatkan nilai A.");
} else if (nilaiUjian >= 80) {
    console.log("Anda mendapatkan nilai B.");
} else if (nilaiUjian >= 70) {
    console.log("Anda mendapatkan nilai C.");
} else {
    console.log("Anda mendapatkan nilai D. Anda perlu belajar lebih keras.");
}

// Contoh nested if untuk mengevaluasi dua kondisi
var isHariCerah = true;
var suhu = 25;

if (isHariCerah) {
    if (suhu > 30) {
        console.log("Hari ini sangat panas!");
    } else {
        console.log("Hari ini cerah, tapi suhunya tidak terlalu tinggi.");
    }
} else {
    console.log("Hari ini tidak cerah.");
}
