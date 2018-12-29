import dotenv from 'dotenv';
import fs from 'fs'

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}

export const MONGODB_URI:string = String(process.env["MONGODB_URI"]);
export const SERVER_PORT:number = Number(process.env["SERVER_PORT"]);