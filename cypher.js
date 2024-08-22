// Define a function named cypher
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
			// Check if the character is a uppercase letter
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
