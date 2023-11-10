<?php
// Function to remove whitespaces from a string
function removeWhitespaces($inputString) {
    return str_replace(' ', '', $inputString);
}

// Example usage
$inputString = "This is a sample string with spaces";
$outputString = removeWhitespaces($inputString);

// Display the original and modified strings
echo "Original String: $inputString<br>";
echo "String after removing whitespaces: $outputString";
?>
