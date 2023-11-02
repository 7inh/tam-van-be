import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
import getToken from "./mocks";

let mockToken: string = "";

chai.use(chaiHttp);

describe("Topic route", () => {
    beforeEach(async () => {
        const token = await getToken();
        token && (mockToken = token);
    });

    describe("/get", () => {
        it("it should return a user topic", (done) => {
            chai.request(app)
                .get("/api/topic/get")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send()
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    const topics = res.body;
                    topics.forEach((topic: any) => {
                        expect(topic).to.have.property("title");
                        expect(topic).to.have.property("description");
                    });
                    done();
                });
        });

        it("it should not return a user topic", (done) => {
            chai.request(app)
                .get("/api/topic/get")
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
