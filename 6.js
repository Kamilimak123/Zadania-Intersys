let strArray = prompt("Permutation check(1st array, 11 elements, a1 a2 ... a11): ");
let arr1 = strArray.split(' ').map(Number);
strArray = prompt("Permutation check(2nd array, 11 elements, a1 a2 ... a11): ");
let arr2 = strArray.split(' ').map(Number);
function checkPermutations(arr1, arr2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < arr1.length; i++) {
        if (map1.has(arr1[i]) == false) {
            map1.set(arr1[i], 1);
        } else {
            map1.set(arr1[i], map1.get(arr1[i]) + 1);
        }
        if (map2.has(arr2[i]) == false) {
            map2.set(arr2[i], 1);
        } else {
            map2.set(arr2[i], map2.get(arr2[i]) + 1);
        }
    }
    if (map1.size !== map2.size) return "NO";

    for (let [key, value] of map1) {
        if (map1.get(key) !== map2.get(key)) return "NO";
    }
    return "YES";

}
console.log(checkPermutations(arr1, arr2));