const { editSpeakerList } = require('../request/requestAPI');

const editSpeaker = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const result = await editSpeakerList(id, body);
  res.status(200).json(result);
};

module.exports = editSpeaker;