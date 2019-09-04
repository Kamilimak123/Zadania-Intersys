let T = prompt("Number of test cases(primes): ");
let m = [];
let n = [];
for (let i = 0; i < parseInt(T); i++) {
    let strArray = prompt((i+1) + ". interval(m n): ");
    let arr = strArray.split(' ').map(Number);
    m[i] = arr[0];
    n[i] = arr[1];
}
function numberofPrimes(T, m, n) {
    for (let l = 0; l < T; l++) {
        let val = 0;

        for (let i = m[l]; i <= n[l]; i++) {
            if (i == 1 || i == 0)
                continue;

            let flag = 1;

            for (let j = 2; j <= i / 2; ++j) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
            }
            if (flag == 1) {
                val++;
            }
        }

        console.log(val);
    }
}
console.log(numberofPrimes(T, m, n));