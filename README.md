# Cypher Function

A simple JavaScript function that encrypts a user-provided message by shifting each character's position by 15 within the alphabet. The function supports both uppercase and lowercase letters while leaving other characters unchanged.

## Table of Contents

- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [Code](#code)
- [Usage](#usage)
- [License](#license)

## Introduction

The `cypher` function allows you to encrypt messages using a simple character shift algorithm. The function is designed to handle both uppercase and lowercase letters and retains non-alphabetic characters without change.

## How It Works

The function takes a message as input and shifts each letter by 15 positions in the alphabet:

- Lowercase letters (`a-z`) are shifted within their range.
- Uppercase letters (`A-Z`) are shifted similarly.
- Non-alphabetic characters (e.g., numbers, punctuation) remain unchanged.

### Example

For example, if you input the message `"Hello"`, the output will be an encrypted version of the message.

## Code

Here is the `cypher` function:

\`\`\`javascript
function cypher() {
// Initialize an empty array to store the encoded character codes
let cypherArr = [];
// Initialize an empty string to store the encoded message
let cypherText = '';
// Prompt the user to enter a message to encrypt, and convert it to lowercase
let message = prompt('Enter a message to encrypt:');

    // Loop through each character of the message
    for (let k = 0; k < message.length; k++) {
        // Get the character code of the current character
        let charCode = message.charCodeAt(k);

        // Check if the character is a lowercase letter
        if (charCode > 96 && charCode < 123) {
            // Encode the character code by shifting it by 15 positions
            cypherArr.push(((charCode + 15) % 122) + (charCode + 15 <= 122 ? 0 : 96));
        // Check if the character is an uppercase letter
        } else if (charCode > 64 && charCode < 91) {
            // Encode the character code by shifting it by 15 positions
            cypherArr.push(((charCode - 65 + 15) % 26) + 65);
        } else {
            // Leave the character unchanged if it does not fall under the above conditions
            cypherArr.push(charCode);
        }
        // Convert the array of character codes into a string
        cypherText = String.fromCharCode.apply(null, cypherArr);
    }
    // Return the encoded message
    return 'Encoded message: ' + cypherText;

}
// Call the cypher function to encrypt the message and log the result
console.log(cypher());
\`\`\`

## Usage

To use the function:

1. Copy the JavaScript code into your project.
2. Run the script in a browser environment or a JavaScript console.
3. Enter the message when prompted.
4. The function will return and log the encrypted message.

## License

This project is licensed under the MIT License.
