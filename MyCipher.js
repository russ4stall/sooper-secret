module.exports = class MyCipher {
    constructor(key) {
        this.key = key;
        this.keyArray = new Uint8Array(Buffer.from(this.key));
    }

    encrypt(msgBuffer) {
        let messageArray = Uint8Array.from(msgBuffer);
        messageArray.forEach((item, i) => messageArray[i] = item + this.keyArray[i % this.keyArray.length]);
        return Buffer.from(messageArray);
    }

    decrypt(msgBuffer) {
        let messageArray = Uint8Array.from(msgBuffer);
        messageArray.forEach((item, i) => messageArray[i] = item - this.keyArray[i % this.keyArray.length]);
        return Buffer.from(messageArray);
    }
}