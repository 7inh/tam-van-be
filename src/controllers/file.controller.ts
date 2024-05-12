import express from "express";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const FileController = {
    uploadFile: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            console.log("Uploading file...", req["file"]);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(req["file"]);
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default FileController;
