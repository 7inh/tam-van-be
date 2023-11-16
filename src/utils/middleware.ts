import express from "express";
import multer from "multer";
import path from "path";
import { ERROR_MESSAGE } from "./definitions";

const { v4: uuid } = require("uuid");

const storage = multer.diskStorage({
    destination: (
        _req: express.Request,
        _file: Express.Multer.File,
        cb: (error: Error | null, destination: string) => void
    ) => {
        cb(null, "uploads");
    },
    filename: (
        _req: express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, destination: string) => void
    ) => {
        cb(null, uuid() + path.extname(file.originalname));
    },
});

const MiddleWare = {
    auth: async (req: express.Request, _res: express.Response, next: express.NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (token) {
                return next();
            }

            // if (token) {
            //     const userRequest = await Helper.decodeToken(token);

            //     if (userRequest && userRequest.email && Helper.checkValidEmail(userRequest.email)) {
            //         const accountDatabase = await VariantService.query.getAccountByEmail(
            //             userRequest.email
            //         );

            //         if (!accountDatabase && req.originalUrl !== "/api/account/login") {
            //             return next(new Error(ERROR_MESSAGE.UNAUTHORIZED));
            //         }

            //         req.body.user = { ...userRequest, ...accountDatabase };

            //         return next();
            //     } else {
            //         return next(new Error(ERROR_MESSAGE.INVALID_EMAIL));
            //     }
            // }

            throw Error;
        } catch (e) {
            console.error(e);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    uploader: multer({ storage: storage }),
};

export default MiddleWare;
