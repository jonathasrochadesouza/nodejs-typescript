import express, { application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

import * as dotenv from "dotenv";
dotenv.config();

var mongo_db:any = process.env.MONGODB_URL;

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect(mongo_db)
    }

    private routes (): void {
        this.express.use(routes);
    }

}

export default new App().express;
