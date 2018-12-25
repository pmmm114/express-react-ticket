import express from "express";
import { MONGODB_URI } from "./utils/secrets";
import mongoose from "mongoose";

class Server{
    public server: express.Application;

    constructor () {
        this.server = express();
        this.initializeDb();
    }

    initializeDb(): void {
        const mongoUrl:string = String(MONGODB_URI);
        mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(
          () => {
            console.log('DB Connection has been established');
          },
          (err) => {
            console.error('Unable to connect to the DB:', err);
          },
        );
      }
    
}

export default Server;
