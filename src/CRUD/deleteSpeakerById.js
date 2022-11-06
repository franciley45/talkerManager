const { deleteSpeaker } = require('../request/requestDB');

const deleteSpeakerById = async (req, res) => {
const { id } = req.params;
const request = await deleteSpeaker(id);
res.status(204).json(request);
};

module.exports = deleteSpeakerById;