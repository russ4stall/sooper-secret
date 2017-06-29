var message = "Russell Fo";




var buff = Buffer.from(message);
var encodedMessageBuf = encode5bit(buff);
var decodedMessageBuf = decode5bit(encodedMessageBuf);
console.log("StartingMsg: \t", message);
console.log("StartingBuf: \t", Buffer.from(message, "utf8"));
console.log("EncodedBuf: \t", encodedMessageBuf);
console.log("DecodedBuf: \t", decodedMessageBuf);
console.log("DecodedMsg: \t", decodedMessageBuf.toString('ascii'));


// Convert to 5 bit encoding
function encode5bit(buffer) {
    var intArr = new Uint8Array(buffer);

    let bitBuffer = ""; // this will hold the bits
    intArr.forEach(item => {
        bitBuffer += item.toString(2).slice(-5);
        //console.log(item.toString(2).slice(-5));
    }); // get last 5 bits from each byte and append them to bitBuffer

    bitBuffer += "0".repeat(8 - (bitBuffer.length % 8)); // pad end with 0's

    //console.log(bitBuffer);

    let byteCount = bitBuffer.length / 8; // how many bytes to expect from bitBuffer

    let bArr = new Uint8Array(byteCount); // create a new Uint8Array to hold the newly constructed bytes

    for (var i = 0; i < byteCount; i++) {
        let strIndex = i * 8;
        let byte = bitBuffer.slice(strIndex, strIndex + 8); 
        console.log(byte);
        bArr[i] = parseInt(byte, 2);
    }

    //bArr.forEach(item => process.stdout.write(item.toString(2)));

    return Buffer.from(bArr);
}

// Decode
function decode5bit(buffer) {
    var intArr = new Uint8Array(buffer);

    let bitBuffer = ""; // this will hold the bits
    intArr.forEach(item => bitBuffer += item.toString(2)); // append all the bits to bitBuffer

    let byteCount = bitBuffer.length / 5; // how many bytes to expect from bitBuffer

    let bArr = new Uint8Array(byteCount); // create a new Uint8Array to hold the newly constructed bytes

    for (var i = 0; i < byteCount; i++) {
        let strIndex = i * 5;
        let byte = "011" + bitBuffer.slice(strIndex, strIndex + 5);
        bArr[i] = parseInt(byte, 2);
    }

    return Buffer.from(bArr);
}
