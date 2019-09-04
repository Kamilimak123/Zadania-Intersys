let arr1 = [128, 2, 3, 4, 5, 8, 10, 16, 31, 32];

function checkPowerofTwo(arr1) {
    let val = 0;
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        val = val | arr1[i];
    }
    let i = 0;
    let j = 0;
    while (Math.pow(2, i) < val) {
        if (((val >> i) & 1) !== 0) {
            arr2[j] = ((val >> i) & 1) * Math.pow(2, i);
            j++;
        }
        i++;
    }
    if (arr2.length !== 0) return arr2.join(", ");
    else return "NA";
    

}
console.log(checkPowerofTwo(arr1));