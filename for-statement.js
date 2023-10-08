var jumlahkapal = 10;
var KapalBeroprasi = 8;
var NoKapal = 1;

while(NoKapal <= KapalBeroprasi){
    console.log('Kapal No.' + NoKapal + ' Beroprasi dengan baik.');

    NoKapal++;
}

for (NoKapal = KapalBeroprasi + 1; NoKapal <= jumlahkapal; NoKapal++){
    console.log('Kapal No.' + NoKapal + ' Sedang tidak beroprasi.');
}