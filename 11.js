let N = prompt("Common Digit array length(N): ");
let strArray = prompt("Common Digit array elements(a1 a2 a3 a4 a5 ... an): ");
function commonDigit(N, numbers) {
    numbers = numbers.replace(/\s/g, '');
    let map1 = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (map1.has(numbers[i]) == false) {
            map1.set(numbers[i], 1);
        } else {
            map1.set(numbers[i], map1.get(numbers[i]) + 1);
        }
    }
    let keys = map1.keys();
    let ke = keys.next().value;
    let val = map1.get(ke);
    for (let [key, value] of map1) {
        if (value > val) {
            val = value;
            ke = key;
        }
        if (value == val) {
            if (key > ke) {
                ke = key;
            }
        }
    }
    return ke;

}
console.log(commonDigit(N, strArray));
