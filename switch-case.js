var namaMakanan = prompt ('Masukkan nama makanan daerah Kepri : \n cth: Mie Lendir, Laksa, Mie Tarempa, Roti Kirai, Kernas');

switch(namaMakanan){
    case 'Mie Lendir' :
        alert ('Makanan daerah Tanjungpinang');
        break;
    case 'Laksa' :
        alert('Makanan daerah Lingga');
        break;
    case 'Mie Tarempa' :
        alert('Makanan daerah Anambas');
        break;
    case 'Roti Kirai' :
        alert('Makanan daerah Batam');
        break;
    case 'Kernas' :
        alert('Makanan daerah Natuna');
        break;
    default :
        alert('Anda memasukan nama makanan yang salah');
        break;    
}