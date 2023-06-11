import request from "supertest";
import app from "../app";
import { Post } from "@prisma/client";

describe("post index route", () => {
  test("Get all posts", async () => {
    const res = await request(app).get("/api/v1/posts");
    expect(res.body.length).not.toBe(0);
  });

  test("The endpoint should only return posts that are published", async () => {
    const res = await request(app).get("/api/v1/posts");
    const posts: Post[] = res.body
    const areAllPublished = posts.every(post => {
      return post.published === true
    })

    expect(areAllPublished).toBe(true)
  })
});