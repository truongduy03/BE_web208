import express from "express";
import cors from 'cors';
import router from "./routes/index";

const app = express();

app.use(express.json())
app.use(cors())

app.use('/',router)
export const viteNodeApp = app;