function computeSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = computeSum(numbers);

console.log("The sum of the elements is: " + result);
