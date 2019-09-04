let N = prompt("Digit Sum array length(N): ");
let strArray = prompt("Digit Sum array elements(a1 a2 a3 a4 a5 ... an): ");
function digitSum(N,arr) {
    let arr1 = arr.split(' ').map(Number);
    let maxVal = 0;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        let number = arr1[i].toString();
        let val = 0;
        for (let j = 0; j < number.length; j++) {
            val = val + parseInt(number[j]);
        }
        if(val>maxVal) {
            maxVal = val;
            index = i;
        }
    }
    return index;
}
digitSum(N,strArray);

