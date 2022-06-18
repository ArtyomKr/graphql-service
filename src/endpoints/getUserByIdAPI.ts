import {ServerResponse} from 'http';
import getUser from '../opr/getUser.js';

export default function getUserByIdAPI(res: ServerResponse, id: string) {
  const { code, body } = getUser(id);
  res.statusCode = code;
  res.write(JSON.stringify(body));
}