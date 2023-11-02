import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
import getToken from "./mocks";

let mockToken: string = "";
const mockJob = {
    position_id: 1,
    title: "UNIT TEST",
    employment_type: "Fulltime",
}

chai.use(chaiHttp);

describe("Job route", () => {
    beforeEach(async () => {
        const token = await getToken();
        token && (mockToken = token);
    });

    describe("/upsert", () => {
        it("it should return a new job", (done) => {
            chai.request(app)
                .post("/api/job/upsert")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({
                    job: mockJob,
                })
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(201);
                    expect(res.body).to.include(mockJob)
                    done();
                });
        });

        // it("it should not return a new job", (done) => {
        //     chai.request(app)
        //         .post("/api/job/upsert")
        //         .set("Content-Type", "application/json")
        //         .auth("", { type: "bearer" })
        //         .send({})
        //         .end((err: any, res: any) => {
        //             expect(err).to.eql(null);
        //             expect(res.status).to.equal(400);
        //             done();
        //         });
        // });
    });

    // describe("/get", () => {
    //     it("it should return a user job", (done) => {
    //         chai.request(app)
    //             .get("/api/job/get")
    //             .set("Content-Type", "application/json")
    //             .auth(mockToken, { type: "bearer" })
    //             .send()
    //             .end((err: any, res: any) => {
    //                 expect(err).to.eql(null);
    //                 expect(res.status).to.equal(200);
    //                 expect(res.body).to.have.property("full_name");
    //                 expect(res.body).to.have.property("account_id");
    //                 done();
    //             });
    //     });

    //     it("it should not return a user job", (done) => {
    //         chai.request(app)
    //             .get("/api/job/get")
    //             .set("Content-Type", "application/json")
    //             .auth("", { type: "bearer" })
    //             .send()
    //             .end((err: any, res: any) => {
    //                 expect(err).to.eql(null);
    //                 expect(res.status).to.equal(400);
    //                 done();
    //             });
    //     });
    // });
});
