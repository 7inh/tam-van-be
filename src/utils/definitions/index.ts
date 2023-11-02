export const ERROR_MESSAGE = {
    INVALID_EMAIL: "INVALID_EMAIL",
    UNAUTHORIZED: "UNAUTHORIZED",
    BAD_REQUEST: "BAD_REQUEST",
    NOT_ACCEPTABLE: "NOT_ACCEPTABLE",
};

export const ERROR_DETAIL = {
    [ERROR_MESSAGE.BAD_REQUEST]: {
        message: "Bad request",
        status: 400,
    },
    [ERROR_MESSAGE.UNAUTHORIZED]: {
        message: "unauthorized",
        status: 401,
    },
    [ERROR_MESSAGE.INVALID_EMAIL]: {
        message: "Invalid email address",
        status: 403,
    },
    [ERROR_MESSAGE.NOT_ACCEPTABLE]: {
        message:
            "This web server doesn't find any content that conforms to the criteria given by the user agent.",
        status: 406,
    },
};

export const SUCCESS_MESSAGE = {
    OK: "OK",
    CREATED: "CREATED",
};

export const SUCCESS_DETAIL = {
    [SUCCESS_MESSAGE.OK]: {
        status: 200,
        message: "The request succeeded",
    },
    [SUCCESS_MESSAGE.CREATED]: {
        status: 201,
        message: "Created",
    },
};

export const VALID_EMAIL = "@gmail.com";
