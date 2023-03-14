import getNodeEnv from "../config/getNodeEnv";

if (getNodeEnv() === "development") {
  // development specific middlewares here
  setDotEnv()
}

async function setDotEnv() {
  const { default: dotenv } = await import("dotenv");
  await dotenv.config();
}
