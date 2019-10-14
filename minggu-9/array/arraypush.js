const hewan = ['singa', 'ular', 'harimau'], tambahan = ['buaya', 'beruang', { obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();

// NOTE : Array siap adalah fungsi perulangan array seperti for in dan foreach