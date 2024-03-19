import express from "express";
import login from "./controllers/auth/login";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use('/auth', login);


export default app;
