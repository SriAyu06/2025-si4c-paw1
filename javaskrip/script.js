//alert ('belajar javaskript')
// ambil value nama

function kirim(){
    let nama = document.getElementById('nama').value;
    console.log('nama :' + nama);
    let saran = document.getElementById('saran').value;
    console.log('saran :' + saran);


// tampilkan nama ke ul id = list-pesan
document.getElementById('list-pesan').innerHTML = `<tr><td>${nama}</td><td>${saran}</td></tr>`;
 
}