import {ServerResponse} from 'http';
import deleteUser from "../opr/deleteUser.js";

export default function deleteUserAPI(res: ServerResponse, id: string) {
  const { code, body } = deleteUser(id);
  res.statusCode = code;
  res.write(JSON.stringify(body));
}