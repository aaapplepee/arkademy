const data = [9, 2, 3, 4, 5, 6, 7]
const result =  []

data.map((item)=>{
    if (item % 2 === 0) {
        result.push(item)
    } else{
        result.push(item + 1)
    }
})

console.log(result)
