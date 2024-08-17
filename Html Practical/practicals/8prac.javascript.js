// Function to remove a character at a specified position and return the new string
function removeCharacterAtPosition(inputString, position) {
    if (position < 0 || position >= inputString.length) {
        return "Invalid position";
    }

    const firstPart = inputString.substring(0, position);
    const secondPart = inputString.substring(position + 1);
    return firstPart + secondPart;
}

// Function to change the case of a string
function changeCase(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

// Example usage:
const originalString = "Hello, World!";
const positionToRemove = 4;
const modifiedString1 = removeCharacterAtPosition(originalString, positionToRemove);
const modifiedString2 = changeCase(originalString);

console.log("Original String:", originalString);
console.log("After Removing Character at Position", positionToRemove, ":", modifiedString1);
console.log("After Changing Case:", modifiedString2);
