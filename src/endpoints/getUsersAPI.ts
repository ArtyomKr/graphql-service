import {getUsersDB} from '../db/usersDB.js';
import {ServerResponse} from 'http';

export default function getUsersAPI(res: ServerResponse) {
  res.statusCode = 200;
  res.write(JSON.stringify(getUsersDB()));
}
