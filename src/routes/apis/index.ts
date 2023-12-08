import variant from "./variant";
// import material from "./material";
// import availability from "./availability";
import item from "./item";
// import rare from "./rare";
// import file from "./file";
import express from "express";
import coupon from "src/routes/apis/coupon";
import address from "src/routes/apis/address";

const api = express.Router();

api.use("/address", address);
api.use("/coupon", coupon);
api.use("/variant", variant);
// api.use("/material", material);
// api.use("/availability", availability);
// api.use("/rare", rare);
api.use("/item", item);
// api.use("/file", file);
api.use("/test", (_req, res) => {
    res.send("Hello World!");
});
api.use("/env", (_req, res) => {
    res.send(process.env.NODE_ENV);
});

export default api;
