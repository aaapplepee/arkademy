const siswa = [
    {
        "nama":"Ahmad Dzulfikar",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Akmal Widad",
        "kelas":"XI-RPL-1"
    }, {
        "nama":"Ananda Zidane",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Hilmi",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Nanda Riansyah",
        "kelas":"XI-RPL-1"
    },
];

let x;

for(x in siswa){
    let namaSiswa = siswa[x].nama
    let kelasSiswa = siswa[x].kelas
    let divider = "<div>\
    <span class='nama-siswa'>"+namaSiswa+"</span>\
    <span class='kelas-siswa'>"+kelasSiswa+"</span>\
    </div>";
    document.getElementById('siswa-rpl').innerHTML += divider
}

