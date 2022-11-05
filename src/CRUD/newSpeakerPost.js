const { nowMember } = require('../request/requestAPI');

const newSpeaker = async (req, res) => {
    const activity = req.body;
    const users = await nowMember(activity);
    res.status(201).json(users);
};

module.exports = newSpeaker;