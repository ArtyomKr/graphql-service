import {IncomingMessage, ServerResponse} from 'http';
import createUser from '../opr/createUser.js';
import readReqBody from "../utils/readReqBody.js";

export default async function createUserAPI(req: IncomingMessage, res: ServerResponse) {
  const data = await readReqBody(req);
  const { code, body } = createUser(data);

  res.statusCode = code;
  res.write(JSON.stringify(body));
}