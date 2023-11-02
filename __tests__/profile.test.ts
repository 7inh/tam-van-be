import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
import getToken from "./mocks";

let mockToken: string = "";

chai.use(chaiHttp);

describe("Profile route", () => {
    beforeEach(async () => {
        const token = await getToken();
        token && (mockToken = token);
    });

    describe("/upsert", () => {
        it("it should return a new user profile", (done) => {
            chai.request(app)
                .post("/api/profile/upsert")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({
                    profile: {
                        full_name: "best name ever",
                        phone_number: "0987654321",
                        address: "HCM",
                    },
                })
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(201);
                    expect(res.body).to.have.property("full_name");
                    expect(res.body).to.have.property("account_id");
                    done();
                });
        });

        it("it should not return a new user profile", (done) => {
            chai.request(app)
                .post("/api/profile/upsert")
                .set("Content-Type", "application/json")
                .auth("", { type: "bearer" })
                .send({})
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(400);
                    done();
                });
        });
    });

    describe("/get", () => {
        it("it should return a user profile", (done) => {
            chai.request(app)
                .get("/api/profile/get")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send()
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("full_name");
                    expect(res.body).to.have.property("account_id");
                    done();
                });
        });

        it("it should not return a user profile", (done) => {
            chai.request(app)
                .get("/api/profile/get")
                .set("Content-Type", "application/json")
                .auth("", { type: "bearer" })
                .send()
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(400);
                    done();
                });
        });
    });
});
