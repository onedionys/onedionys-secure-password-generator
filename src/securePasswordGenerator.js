function generatePassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()-_+=~`[]{}|;:\'",.<>?';

    let password = '';
    const allChars = uppercaseChars + lowercaseChars + digits + specialChars;

    password += getRandomChar(uppercaseChars);
    password += getRandomChar(lowercaseChars);
    password += getRandomChar(digits);
    password += getRandomChar(specialChars);

    for (let i = 4; i < length; i++) {
        password += getRandomChar(allChars);
    }

    return password.split('').sort(() => Math.random() - 0.5).join('');
}

function getRandomChar(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

module.exports = { generatePassword };
