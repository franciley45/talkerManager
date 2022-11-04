const fs = require('fs').promises;
const { join } = require('path');

const readingFiles = async () => {
  const path = '../talker.json';
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

module.exports = { getAllSpeakers };