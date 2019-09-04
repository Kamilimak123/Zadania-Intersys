let str = prompt("(Palindrome check) Input string: ");//"IamPalindrome123!@#emordnilaPmaI";
function palindrome(str) {
    let re = /[A-Za-z]/g;
    let found = str.match(re);
    for (let i = 0; i < found.length / 2; i++) {
        if (found[i] !== found[found.length - i - 1]) {
            return "NO";
        }
    }
    return "YES";
}
console.log(palindrome(str));