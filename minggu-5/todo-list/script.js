let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali."
    },
    {
        title:"Mi Aceh",
        description:"Mie Aceh adalah masakan mie pedas khas Aceh di Indonesia. Mie kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut disajikan dalam sup sejenis kari yang gurih dan pedas"
    },
    {
        title:"Hamburger",
        description:"Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan ditengahnya diisi dengan patty yang biasanya di ambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombay."
    },
    {
        title:"Pecak lele",
        description:"Pecak lele di Indonesia adalah nama sebuah makanan khas Jawa yang terdiri dari ikan lele dan sambal pecak. Biasanya yang dimaksud adalah ikan lele yang digoreng kering dengan minyak lalu disajikan dengan sambal tomat dan lalapan"
    },
    {
        title:"Es Buah",
        description:"Es buah adalah makanan penutup koktail buah es Indonesia. Minuman dingin dan manis ini terbuat dari buah-buahan yang dipotong dadu, seperti madu, blewah, nanas, pepaya, labu, nangka dan kolang kaling, dicampur dengan es serut atau es batu, dan dipermanis dengan gula cair atau sirup."
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=>{
        for(let x in todo){
            this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
        }
    }
    setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        <div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()
