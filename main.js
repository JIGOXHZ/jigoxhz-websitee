// Fungsi untuk menangani klik pada link dengan jeda 1 detik
document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default (membuka link langsung)
  
    // Menambahkan jeda 1 detik sebelum membuka link
    setTimeout(function() {
        window.location.href = 'tutordownload.html'; // Mengarahkan ke halaman setelah 1 detik
    }, 500); // Waktu jeda dalam milidetik (1000ms = 1 detik)
});

document.getElementById('scriptgameguardian').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default (membuka link langsung)
  
    // Menambahkan jeda 1 detik sebelum membuka link
    setTimeout(function() {
        window.location.href = 'page2.html'; // Mengarahkan ke halaman setelah 1 detik
    }, 500); // Waktu jeda dalam milidetik (1000ms = 1 detik)
});

// Fungsi untuk toggle menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  const nav = document.querySelector('nav');
  nav.classList.toggle('show'); // Menambah atau menghapus class 'show'
  menu.classList.toggle('show'); // Optional, jika ingin mengubah tampilan
}