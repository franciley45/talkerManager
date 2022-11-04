const { getAllSpeakers } = require('../request/requestAPI');

const SearchAll = async (_req, res) => {
    const result = await getAllSpeakers();
    res.status(200).json(result);
};

module.exports = SearchAll;