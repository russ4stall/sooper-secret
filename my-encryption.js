var MyCipher = require("./MyCipher.js");
var cipher = new MyCipher("jsdlk;adg0239FFF#");

var data = "This is some s00per seekret $h1t!"
var dataBuff = Buffer.from(data);
var encryptedData = cipher.encrypt(dataBuff);
var encryptedDataB64 = encryptedData.toString('base64');

var decryptedData = cipher.decrypt(encryptedData);

console.log("data: ", data);
console.log("dataBuff: ", dataBuff);
console.log("encryptedDataBuff: ", encryptedData);
console.log("encryptedDataUtf8: ", encryptedData.toString());
console.log("encryptedDataBase64: ", encryptedData.toString('base64'));
console.log("decryptedDataBuff: ", decryptedData);
console.log("decryptedData: ", decryptedData.toString());