const arr = [10, 20, 30, 40, 50]

function add(total, num){
    return total + num
}

let res = arr.reduce(add)//reduce returns a single value and does not executes empty array elements. it does not changes and the original value
console.log("result = " +res)// it is 150 as 10+20+30+40+50=150