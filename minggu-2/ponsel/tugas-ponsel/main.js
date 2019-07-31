const ponsel = [
    {
        "nama":"ASUS ROG",
        "harga":"12.000.000",
        "ram":"8gb",
        "storage":"256gb"
    },
    {
        "nama":"OPPO F11 pro",
        "harga":"4.600.000",
        "ram":"6gb",
        "storage":"128gb"
    },
    {
        "nama":"ASUS ZENFONE 6",
        "harga":"9.000.000",
        "ram":"8gb",
        "storage":"256gb"
    },
    {
        "nama":"OPPO F9",
        "harga":"3.600.000",
        "ram":"4gb",
        "storage":"128gb"
    },
    {
        "nama":"VIVO V15",
        "harga":"4.500.000",
        "ram":"4gb",
        "storage":"128gb"
    },
]

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider = "<div>\
    <span>"+namaPonsel+"</span>\
    <span>"+hargaPonsel+"</span>\
    <span>"+ramPonsel+"</span>\
    <span>"+storagePonsel+"</span>\
    </div>";
    document.getElementById('sebuah-ponsel').innerHTML += divider
}




var myImage = new Image(300, 300);
myImage.src = 'rog.jpg';
x = document.getElementById("gambar");
x.appendChild(myImage);

var myImage = new Image(300, 300);
myImage.src = 'oppo.jpg';
x = document.getElementById("gambar");
x.appendChild(myImage);

var myImage = new Image(300, 300);
myImage.src = 'zenfone6.jpg';
x = document.getElementById("gambar");
x.appendChild(myImage);