
// Fungsi untuk menangani klik pada link dengan jeda 1 detik
document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default (membuka link langsung)
  
    // Menambahkan jeda 1 detik sebelum membuka link
    setTimeout(function() {
        window.location.href = 'tutordownload.html'; // Mengarahkan ke halaman setelah 1 detik
    }, 500); // Waktu jeda dalam milidetik (1000ms = 1 detik)
});

let progress = 0; // Inisialisasi nilai progress
const totalProgress = 2; // Total progres yang dibutuhkan

// Fungsi untuk memperbarui progress dan teks
function updateProgress(increment) {
  progress += increment; // Tambahkan nilai progress

  // Membatasi progress agar tidak lebih dari total
  if (progress > totalProgress) {
    progress = totalProgress;
  }

  // Update teks progress
  document.getElementById('progress-text').innerText = `Unlock Progress ${progress}/${totalProgress}`;

  // Update progress bar
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = (progress / totalProgress) * 100; // Hitung persentase progress
  progressBar.style.width = progressPercent + '%'; // Sesuaikan lebar progress bar

  // Update status tombol 'openlink'
  const openLinkBtn = document.getElementById('openlinkBtn');
  if (progress === totalProgress) {
    openLinkBtn.classList.add('active'); // Tambahkan class 'active' saat progres selesai
    openLinkBtn.innerText = 'THANK YOU FOR SUBSCRIBE AND LIKE, LINK IS OPEN'; // Ubah teks tombol
  } else {
    openLinkBtn.classList.remove('active'); // Hapus class 'active' saat progres belum selesai
    openLinkBtn.innerText = 'LOCKED LINK'; // Ubah teks tombol
  }
}

// Event listener untuk tombol subscribe
document.getElementById('subscribeBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Cegah aksi default (misalnya membuka link)
  updateProgress(1); // Tambah progress 1
  window.open(this.href, '_blank'); // Buka link di tab baru
});

// Event listener untuk tombol like
document.getElementById('likeBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Cegah aksi default
  updateProgress(1); // Tambah progress 1
  window.open(this.href, '_blank'); // Buka link di tab baru
});

// Fungsi untuk toggle menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  const nav = document.querySelector('nav');
  nav.classList.toggle('show'); // Menambah atau menghapus class 'show'
  menu.classList.toggle('show'); // Optional, jika ingin mengubah tampilan
}