const assert = require('assert');
const { generatePassword } = require('../src/securePasswordGenerator');

describe('Secure Password Generator', () => {
    it('should generate a password of specified length', () => {
        const password = generatePassword(12);
        assert.strictEqual(password.length, 12);
    });

    it('should generate a password with at least one uppercase letter', () => {
        const password = generatePassword(8);
        assert(/[A-Z]/.test(password));
    });

    it('should generate a password with at least one lowercase letter', () => {
        const password = generatePassword(8);
        assert(/[a-z]/.test(password));
    });

    it('should generate a password with at least one digit', () => {
        const password = generatePassword(8);
        assert(/[0-9]/.test(password));
    });

    it('should generate a password with at least one special character', () => {
        const password = generatePassword(8);
        assert(/[!@#$%^&*()-_+=~`[\]{}|;:'",.<>?]/.test(password));
    });
});
