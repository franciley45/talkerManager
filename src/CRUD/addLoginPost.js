const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const addLogin = (_req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
};

module.exports = addLogin;
