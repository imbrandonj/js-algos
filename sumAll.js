// A function that returns the sum of
// Two numbers and all of them numbers between them
// Should work on only positive numbers and
// Of number type

const sumAll = function(num1, num2) {
    let sum = 0;

    if ((num1 <= 0) || (typeof num1 != "number") || (num2 <= 0) || (typeof num2 != "number")) {
        return "ERROR";
    } else {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                sum += i;
            } 
        } else if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                sum += i;
            }
        } else if (num1 == num2) {
            return num1 + num2;
        }
    }

    return sum;
};

