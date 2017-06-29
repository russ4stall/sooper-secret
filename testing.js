var msg = "10011111001010010011001";

//var buff = Buffer.concat([buff, Buffer.from(n)]);
var bin = "00101001";
var buff = Buffer.from(parseInt(bin, 2).toString());
console.log(buff);

var intArr = new Uint8Array([bin]);

console.log(intArr);