import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
import getToken from "./mocks";

let mockToken: string = "";

chai.use(chaiHttp);

describe("Account route", () => {
    beforeEach(async () => {
        const token = await getToken();
        token && (mockToken = token);
    });

    describe("/login", () => {
        it("it should return a user information", (done) => {
            chai.request(app)
                .get("/api/account/login")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({})
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("email");
                    done();
                });
        });

        it("it should not return a user information", (done) => {
            chai.request(app)
                .get("/api/account/login")
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

    describe("/update", () => {
        it("it should return a new user information", (done) => {
            chai.request(app)
                .post("/api/account/update")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({
                    role: "candidate",
                })
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("role");
                    expect(res.body.role).to.equal("candidate");
                    done();
                });
        });

        it("it should not return a new user information", (done) => {
            chai.request(app)
                .get("/api/account/login")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({
                    role: "admin",
                })
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("role");
                    expect(res.body.role).not.to.equal("admin");
                    done();
                });
        });
    });
});
