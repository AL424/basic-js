const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    const arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const table = {};
    for (let i = 0; i < arr.length; i++) {
      table[arr[i]] = [...arr.slice(i), ...arr.slice(0, i)];
    }
    this.table = table;

    this.reverse = reverse;
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error ('Incorrect arguments!');
    }

    let fullKey = key.toUpperCase();

    while(message.length !== fullKey.length) {
      if (message.length > fullKey.length) fullKey += key.toUpperCase();
      else fullKey = fullKey.slice(0, message.length);
    }

    let result = '';
    let indexKey = 0;

    for (let i = 0; i < message.length; i++) {
      const arrKey = this.table.A;
      if (arrKey.includes(message[i].toUpperCase())) {
        let index = this.table.A.indexOf(message[i].toUpperCase());
        result += this.table[fullKey[indexKey++]][index];
      } else result += message[i];
    }

    console.log(result);

    if (!this.reverse) {
      let resultArr = result.split('');
      resultArr.reverse();
      result = resultArr.join('');
    }

    console.log(result);
    return result;
  }
  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error ('Incorrect arguments!');
    }

    let fullKey = key.toUpperCase();

    while(encryptedMessage.length !== fullKey.length) {
      if (encryptedMessage.length > fullKey.length) fullKey += key.toUpperCase();
      else fullKey = fullKey.slice(0, encryptedMessage.length);
    }

    let result = '';
    let indexKey = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let arrKey = this.table[fullKey[indexKey]]
      if (arrKey.includes(encryptedMessage[i].toUpperCase())) {
        let index = arrKey.indexOf(encryptedMessage[i]);
        result += this.table.A[index];
        indexKey += 1;
      } else result += encryptedMessage[i];
    }

    if (!this.reverse) {
      let resultArr = result.split('');
      resultArr.reverse();
      result = resultArr.join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
