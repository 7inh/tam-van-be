import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import express, { Express } from "express";

import dotenv from "dotenv";
dotenv.config();

import routes from "./routes";
import Handler from "./utils/handler";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/public", express.static(path.resolve(__dirname, "../public")));
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')))

app.use("/", routes);

app.use(Handler.errorHandler)

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
