// Converts a binary of the string type to a base 10 integer

function convertToInteger(str) {
    let reverseString = [...str].reverse().join("");
    let sum = 0;
    let length = str.length;

    for (let i = 0; i < length; i++) {
        let typeInt = parseInt(reverseString[i])
        sum += typeInt * (2 ** i);
    }
    return sum;
}

console.log(convertToInteger("111001"));