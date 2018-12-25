import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.
import Server from './server';
import * as express from "express";

const port: number = Number(process.env.PORT) || 3000;
const server: express.Application = new Server().server;

server.listen(port, () => console.log(`Express server listening at ${port}`))
.on('error', err => console.error(err));