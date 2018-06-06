const Hashes = require('jshashes');

/**
 * Method used for hashing a provided string.
 *  
 * @param {string} str - String that would undergo hashing process.
 * @param {string} salt - String that would be used as hashing salt to deter rainbow table attacks.
 * 
 * @returns {string} - The result of the hashing of the salted input.
 */
let execute = (str, salt) => (new Hashes.SHA256()).b64(str + salt);

module.exports = {
    execute
};