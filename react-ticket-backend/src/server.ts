import express from "express";
import { MONGODB_URI } from "./utils/secrets";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from 'passport';
import router from './router';

export default class Server{
    app: express.Application;

    constructor () {
        this.app = express();
        this.middleware();
        this.initializeDb();
    }

    initializeDb(): void {
        const mongoUrl:string = String(MONGODB_URI);
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, }).then(
          () => {
            console.log('DB Connection has been established');
          },
          (err) => {
            console.error('Unable to connect to the DB:', err);
          },
        );
    }
    
    middleware(): void {
        const { app } = this;
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(passport.initialize());
        app.use(router);
    }

}
