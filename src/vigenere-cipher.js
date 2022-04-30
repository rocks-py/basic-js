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
  isReverse = false;
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor(isDirect) {
    if (isDirect !== undefined) this.isReverse = !isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error(`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let k = 0;
    console.log(key);
    console.log(message);

    let encrypted = [];
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if (this.alphabet.includes(letter)) {
        // encypt/decrypt
        // получаем остаток от деления
        // должны получить соответствующий символ ключа 
        let key_letter = key[k % key.length];
        k += 1;

        let idx_1 = this.alphabet.indexOf(letter);
        let idx_2 = this.alphabet.indexOf(key_letter);
        let idx_res = (idx_1 + idx_2) % this.alphabet.length;

        let res_letter = this.alphabet[idx_res];
        encrypted.push(res_letter);
      } else {
        encrypted.push(letter);
      }
    }

    // return encrypted;
    let result = this.isReverse ? encrypted.reverse() : encrypted;
    return result.join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error(`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let k = 0;
    console.log(key);
    console.log(message);

    let encrypted = [];
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if (this.alphabet.includes(letter)) {
        // encypt/decrypt
        // получаем остаток от деления
        // должны получить соответствующий символ ключа 
        let key_letter = key[k % key.length];
        k += 1;

        let idx_1 = this.alphabet.indexOf(letter);
        let idx_2 = this.alphabet.indexOf(key_letter);
        let diff = idx_1 - idx_2;
        // alphabet.length == 26
        let idx_res = diff >= 0 ? diff : this.alphabet.length - (-diff);

        let res_letter = this.alphabet[idx_res];
        encrypted.push(res_letter);
      } else {
        encrypted.push(letter);
      }
    }

    // return encrypted;
    let result = this.isReverse ? encrypted.reverse() : encrypted;
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};


const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);
// => 'AEIHQX SX DLLU!'
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// => 'ATTACK AT DAWN!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// // => '!ULLD XS XQHIEA'
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
// // => '!NWAD TA KCATTA'
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));