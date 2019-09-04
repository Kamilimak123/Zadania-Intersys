function fixage(arr) {
    let arr1 = [];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 18 && arr[i] <= 60) {
            arr1[k] = arr[i];
            k++;
        }
    }
    if (arr1.length == 0) {
        return "NA";
    } else {
        return arr1.join(",");
    }
}