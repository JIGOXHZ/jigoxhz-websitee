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

// Pilih semua tombol dengan kelas "test"
const buttons = document.querySelectorAll('.test');

// Tambahkan event listener untuk setiap tombol
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Tambahkan kelas "clicked" ke tombol yang diklik
        button.classList.add('clicked');
    });
});


    function toggleArrow() {
  const arrow = document.getElementById('arrow');
  const boxesContainer = document.getElementById('boxes-container');

  // Toggle arrow direction
  if (arrow.innerHTML === '⇓') {
    arrow.innerHTML = '⇒'; // Change to right arrow
    boxesContainer.style.display = 'flex'; // Show the boxes
  } else {
    arrow.innerHTML = '⇓'; // Change to down arrow
    boxesContainer.style.display = 'none'; // Hide the boxes
  }
}

function toggleArrow1() {
  const arrow = document.getElementById('arrow1');
  const boxesContainer = document.getElementById('boxes-container1');

  // Toggle arrow direction
  if (arrow.innerHTML === '⇓') {
    arrow.innerHTML = '⇒'; // Change to right arrow
    boxesContainer.style.display = 'flex'; // Show the boxes
  } else {
    arrow.innerHTML = '⇓'; // Change to down arrow
    boxesContainer.style.display = 'none'; // Hide the boxes
  }
}