import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.
import Server from './server';
import * as express from "express";

import { SERVER_PORT } from "./utils/secrets";

const port: number = Number(SERVER_PORT) || 3000;
const app: express.Application = new Server().app;

app.listen(port, () => console.log(`Express server listening at ${port}`))
.on('error', err => console.error(err));