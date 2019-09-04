let N = prompt("Reverse array length(N): ");
let strArray = prompt("Reverse array elements(a1 a2 a3 a4 a5 ... an): ");
let arr = strArray.split(' ').map(Number);
function arrayReverse(arr){
    return arr.reverse();
}
console.log(arrayReverse(arr).join(" "));
