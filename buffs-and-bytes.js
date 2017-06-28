var russell = "Russell";

var buf1 = Buffer.from(russell);
var uia1 = new Uint8Array(buf1);
console.log(buf1);
console.log(buf1.toString());
console.log(buf1.toString('base64'));
console.log(uia1);
console.log();

var buf2 = Buffer.from([0x52, 0x75, 0x73, 0x73, 0x7e]);
var uia2 = new Uint8Array(buf2);
console.log(buf2);
console.log(buf2.toString('hex'));
console.log(uia2);
console.log();

// Size of data. Hex vs base64
var uia3 = new Uint8Array([0, 119, 34, 255, 90, 69, 82, 20]);
var buf3 = Buffer.from([0, 119, 34, 255, 90, 69, 82, 20]);

console.log("int8 array: ", uia3);
console.log("hex array: ", buf3);
console.log("hex string: ", buf3.toString('hex'));
console.log("base64 string: ", buf3.toString('base64'));
console.log("utf string: ", buf3.toString());
console.log();

