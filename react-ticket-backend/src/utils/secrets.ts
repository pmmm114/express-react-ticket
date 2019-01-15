import dotenv from 'dotenv';
import fs from 'fs'

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}

export const MONGODB_URI:string = String(process.env["MONGODB_URI"]);
export const SERVER_PORT:number = Number(process.env["SERVER_PORT"]);
export const TOKEN_SECRET_KEY:string = String(process.env["TOKEN_SECRET_KEY"]);