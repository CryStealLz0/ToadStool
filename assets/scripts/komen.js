// Cek apakah namaAuthor sudah disimpan di sessionStorage
let namaAuthor = sessionStorage.getItem('namaAuthor');

// Jika belum ada, minta pengguna memasukkan nama
if (!namaAuthor || namaAuthor.trim() === '') {
    namaAuthor = prompt('Masukkan nama Anda:')?.trim();

    // Simpan di sessionStorage jika input valid
    if (namaAuthor) {
        sessionStorage.setItem('namaAuthor', namaAuthor);
    }
}

function addComment() {
    const commentText = document.getElementById('commentText').value.trim();
    const commentsList = document.getElementById('commentsList');

    if (commentText === '') {
        alert('Tolong tulis sesuatu untuk berkomentar!');
        return;
    }

    // Buat elemen komentar baru
    const comment = document.createElement('div');
    comment.classList.add('comment');

    const avatar = document.createElement('img');
    avatar.classList.add('comment-avatar');
    avatar.src = 'assets/images/gorilla.png';
    avatar.alt = 'Avatar';

    const content = document.createElement('div');
    content.classList.add('comment-content');

    const author = document.createElement('div');
    author.classList.add('comment-author');
    author.innerText = `${namaAuthor}`;

    const text = document.createElement('div');
    text.classList.add('comment-text');
    text.innerText = commentText;

    // Gabungkan elemen-elemen
    content.appendChild(author);
    content.appendChild(text);
    comment.appendChild(avatar);
    comment.appendChild(content);

    // Tambahkan ke daftar komentar
    commentsList.appendChild(comment);

    // Hapus teks dari textarea
    document.getElementById('commentText').value = '';
}
