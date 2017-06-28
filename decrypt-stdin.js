#!/usr/bin/env node

var data = "";

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    data += chunk;
});


const fs = require('fs'); // Include the fs (file system) library. We need this to read and write files.
const secretKey = fs.readFileSync('secret.key', 'utf-8'); // Get the secret key from a file called 'secret.key'. NOTE: The 'secret.key' file must be in the same directory.
if (!secretKey) throw new Error("Can't find secret key."); // If a key isn't provided, throw an error.

const crypto = require('crypto'), // Include the crypto (cryptography) library. We need this to perform cryptography.
    algorithm = 'aes-256-ctr', // Encryption algorithm to use.
    password = secretKey; // Use the encryption key provided from 'secret.key'.

//var data = fs.readFileSync(fileToDecrypt); // Read the contents (encrypted stuff) from the file.
var decryptedData = decrypt(data); // Decrypt the message using the decrypt function (defined below).

process.stdout.write(decryptedData.toString('utf8')); // Write the decrypted message to the console.

// The decrypt function.
function decrypt(buffer) {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = Buffer.concat([decipher.update(buffer), decipher.final()]);
    return dec;
}