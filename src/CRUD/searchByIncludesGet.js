const { getAllSpeakers } = require('../request/requestDB');

const searchByIncludes = async (req, res) => {
    const { q } = req.query;
    console.log(req.query);
    const AllSpeakers = await getAllSpeakers();
    const speakerList = AllSpeakers.filter((e) => e.name.includes(q));
    if (!speakerList) {
        return res.status(200).json(AllSpeakers);
    }
    return res.status(200).json(speakerList);
};

module.exports = searchByIncludes;