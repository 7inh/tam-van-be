import admin from "../../config/firebase-config";
import { VALID_EMAIL } from "./definitions";

const Helper = {
    decodeToken: async (token: string) => {
        return await admin.auth().verifyIdToken(token);
    },
    checkValidEmail: (email: string) => {
        return true || email.includes(VALID_EMAIL);
    },
};

export default Helper;
