import express from "express";
import postRouter from "./api/v1/postRouter";

const rootRouter = express.Router(); //place your server-side routes here

rootRouter.use("/api/v1/posts", postRouter);



export default rootRouter;