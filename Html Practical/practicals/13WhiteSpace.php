<?php

function removeWhitespaces($inputString) {
    // Use the str_replace function to replace whitespaces with an empty string
    $result = str_replace(' ', '', $inputString);
    
    return $result;
}

// Example usage:
$inputString = "This is a Example of removing whitespaces between sentences.";
$processedString = removeWhitespaces($inputString);

echo "Original String: $inputString\n";
echo "Processed String: $processedString\n";

?>
