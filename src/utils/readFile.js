import { readFile } from 'fs/promises';

const readFile = async (path) => {
  const content = await readFile(path, { encoding: 'utf-8' });
  return content;
};

export default readFile;