const fs = require('fs').promises;
const { join } = require('path');

const path = '../talker.json';

const readingFiles = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    const parse = JSON.parse(contentFile);
    return parse;
  } catch (error) {
    const err = new Error('Erro ao abrir arquivo');
    err.statusCode = 500;
    throw err;
  }
};

const getAllSpeakers = async () => {
  const result = await readingFiles();
  return result;
};

const nowMember = async (body) => {
  const speakers = await getAllSpeakers();
  speakers.push({
    id: speakers[speakers.length - 1].id + 1,
    ...body,
  });

  const newJson = JSON.stringify(speakers, null, 2);
  await fs.writeFile(join(__dirname, path), newJson);
  return speakers[speakers.length - 1];
};

const editSpeakerList = async (id, body) => {
  const speakerList = await getAllSpeakers();
  const result = speakerList.filter((element) => element.id !== Number(id));
  const concatenar = [...result, { id: Number(id), ...body }];
  const newJson = JSON.stringify(concatenar, null, 2);
  await fs.writeFile(join(__dirname, path), newJson);
  const filter = concatenar.filter((e) => e.id === Number(id));
  return filter[0];
};

const deleteSpeaker = async (id) => {
  const speakerList = await getAllSpeakers();
  const result = speakerList.filter((element) => element.id !== Number(id));
  const newJson = JSON.stringify(result, null, 2);
  await fs.writeFile(join(__dirname, path), newJson);
};

module.exports = {
  getAllSpeakers,
  nowMember,
  editSpeakerList,
  deleteSpeaker,
};