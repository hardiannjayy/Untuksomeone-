// 1. AMBIL SEMUA ELEMEN HALAMAN & TOMBOL
const hal1 = document.getElementById('halaman-1');
const hal2 = document.getElementById('halaman-2');
const hal3 = document.getElementById('halaman-3');

const tombolBuka = document.getElementById('tombol-buka');
const tombolKeVideo = document.getElementById('tombol-ke-video');
const tombolKembali = document.getElementById('tombol-kembali');
const tombolGantiFoto = document.getElementById('tombol-ganti-foto'); // Selesai diperbaiki: Mengenalkan tombol baru

const lagu = document.getElementById('lagu-latar');
const semuaFoto = document.querySelectorAll('.slide');
let indeksFotoSekarang = 0;

// 2. FUNGSI UNTUK MENGGANTI FOTO SAAT DIKLIK
function gantiFotoManual() {
    semuaFoto[indeksFotoSekarang].classList.remove('active');
    indeksFotoSekarang = (indeksFotoSekarang + 1) % semuaFoto.length;
    semuaFoto[indeksFotoSekarang].classList.add('active');
}

// Selesai diperbaiki: Perintah ganti foto dipindah secara penuh ke tombol TAP DONGGG
if (tombolGantiFoto) {
    tombolGantiFoto.addEventListener('click', gantiFotoManual);
}


// 3. LOGIKA NAVIGASI PERPINDAHAN HALAMAN & VOLUME LAGU
tombolBuka.addEventListener('click', function() {
    hal1.classList.add('hidden');
    hal2.classList.remove('hidden');
    lagu.volume = 1.0; 
    lagu.play();
});

tombolKeVideo.addEventListener('click', function() {
    hal2.classList.add('hidden');
    hal3.classList.remove('hidden');
    lagu.volume = 0.15; 
});

tombolKembali.addEventListener('click', function() {
    hal3.classList.add('hidden');
    hal2.classList.remove('hidden');
    lagu.volume = 1.0; 
    
    const video = document.getElementById('video-ucapan');
    if (video) video.pause();
});
