import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();

const sever = new Server();

sever.listen();