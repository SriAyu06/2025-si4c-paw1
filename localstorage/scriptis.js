let npm = document.getElementById('npm');
let nama = document.getElementById('nama');

function simpan(){
console.log(npm.value)
console.log(nama.value)

// localStorage.setItem('npm',npm.value)
// localStorage.setItem('nama',nama.value)

// cwk lokal stotage belum ada isi atau beluym
if(localStorage.getItem('mahasiswa')===null){
    // simpan array kosong
localStorage.setItem('mahasiswa','[]')
}

// panggil lokal storage
let data = JSON.parse(localStorage.getItem('mahasiswa'))
console.log(data)
// simpan value npm dan nama kedalam object data
data.push({
    npm: npm.value,
    nama: nama.value
})
 console.log(data)
//  simpan data terbaru dalam lokal storage
// konversi dari objek menjadi string
localStorage.setItem('mahasiswa',JSON.stringify(data))
// panggil tampil
tampil()
}
function tampil(){
    // panggil lokal storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))
    // clear element 
    document.getElementById('list-mhs').innerHTML = ''
    // lakukan perulangan(foreach)
    hasil.forEach(element => {

        // console.log(element)
        document.getElementById('list-mhs').innerHTML += `<div class = " col-lg-4 col-md-6"><h4 class = "txt-primary"> ${element.nama} </h4>
        <h6 class ="text-danger">NPM: ${element.npm}</h6>
        </div>`
    });
}

// jalankan fungsi tampil
tampil()