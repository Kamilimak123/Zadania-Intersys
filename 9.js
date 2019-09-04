function optionalPow(a, b) {
    let flag = confirm("OK - a^b. Cancel - b^a.");
    let val = 0;
    if(flag == true){
        val = Math.pow(a,b);
    }
    else {
        val = Math.pow(b,a);
    }
    return val;
}
console.log(optionalPow(2,3));