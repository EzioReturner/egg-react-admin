'use strict';

const crypto = require('crypto');

class AES {
  constructor() {
    this.keySize = 128;
    this.encoding = 'utf8';
    this.algorithm = 'aes-128-ecb';
    this.iv = '';
    this.cipherEncoding = 'base64';
  }

  en(target, key, replaceChar = false) {
    const cipher = crypto.createCipheriv(this.algorithm, this.initKey(key), this.iv);
    let crypted = cipher.update(target, this.encoding, this.cipherEncoding);
    crypted += cipher.final(this.cipherEncoding);
    if (replaceChar) {
      return crypted.replace(/\+/g, '-').replace(/\//g, '_');
    }
    return crypted;
  }

  de(target, key, replaceChar = false) {
    const decipher = crypto.createDecipheriv(this.algorithm, this.initKey(key), this.iv);
    if (replaceChar) {
      target = target.replace(/-/g, '+').replace(/_/g, '/');
    }
    let dec = decipher.update(target, this.cipherEncoding, this.encoding);
    dec += decipher.final(this.encoding);
    return dec;
  }

  initKey(key) {
    const keys = new Buffer(key),
      bytes = new Buffer(this.keySize / 8);
    for (let i = 0; i < bytes.length; i++) {
      if (keys.length > i) {
        bytes[i] = keys[i];
      } else {
        bytes[i] = 0;
      }
    }
    return bytes;
  }
}

class SHA {
  sha256(str) {
    console.log(
      crypto
        .createHash('HMAC-SHA256')
        .update('Message')
        .digest('base64')
    );

    const hmac = crypto.createHmac('sha256', 'secret');
    hmac.update(str);
    return hmac.digest('hex');
  }
}

module.exports = {
  AES: new AES(),
  SHA: new SHA()
};
