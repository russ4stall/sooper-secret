#!/usr/bin/env node

const fileToEncrypt = process.argv[2];
if (!fileToEncrypt) throw new Error("You must specify a file.");

const fs = require('fs');
const secretKey = fs.readFileSync('secret.key', 'utf-8');

if (!secretKey) throw new Error("Can't find secret key.");

const crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = secretKey;

var data = fs.readFileSync(fileToEncrypt, 'utf-8');
var encryptedData = encrypt(data);
var encryptedDataB64 = encryptedData.toString('base64');

//fs.writeFileSync(`${fileToEncrypt}_encrypted`, encryptedData);

process.stdout.write(encryptedData);

function encrypt(buffer) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    return crypted;
}