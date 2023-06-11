import request from "supertest";
import app from "../app";

describe("post index route", () => {
  test("Get all posts", async () => {
    const res = await request(app).get("/api/v1/posts");
    console.log(res.body)
    expect(res.body.length).not.toBe(0);
  });
});