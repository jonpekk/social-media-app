import express from "express";
import testRouter from "./api/v1/testRouter";

const rootRouter = new express.Router(); //place your server-side routes here

rootRouter.use("/api/v1/test", testRouter);



export default rootRouter;