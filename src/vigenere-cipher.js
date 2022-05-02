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
  constructor (type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw Error('Incorrect arguments!')

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';
    for (let i = 0, j = 0; i < message.length; i++){
      if (j >= key.length)
        j = 0;
      if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91){
        let char = (message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26;
        encrypted += String.fromCharCode(char + 65);
        j++;
      } else {
        encrypted += message[i];
      }
    }
    if (this.type === false)
      return encrypted.split('').reverse().join('');
    else
      return encrypted;
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined)
    throw Error('Incorrect arguments!')

    key = key.toUpperCase();
    let decrypted = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++){
      if (j >= key.length)
        j = 0;
      if (encryptedMessage.charCodeAt(i) > 64 && encryptedMessage.charCodeAt(i) < 91){
        let char = (26 - (key.charCodeAt(j) - 65) + (encryptedMessage.charCodeAt(i) - 65)) % 26;
        decrypted += String.fromCharCode(char + 65);
        j++;
      } else {
        decrypted += encryptedMessage[i];
      }
    }
    if (this.type === false)
      return decrypted.split('').reverse().join('');
    else
      return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
