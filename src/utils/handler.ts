import { ERROR_DETAIL } from "./definitions";
import express from "express";

const Handler = {
    errorHandler: (
        err: Error,
        req: express.Request,
        res: express.Response,
        _next: express.NextFunction
    ) => {
        const errorMessage = err.message;
        const responseStatus = ERROR_DETAIL[errorMessage].status;
        const responseMessage = ERROR_DETAIL[errorMessage].message;

        return res.status(responseStatus).json({
            message: responseMessage,
            path: req.originalUrl,
        });
    },
};

export default Handler;
