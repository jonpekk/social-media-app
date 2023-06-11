import getNodeEnv from "../config/getNodeEnv";

if (getNodeEnv() === "staging") {
  // development specific middlewares here

}

async function getDotEnv() {
  const { default: dotenv } = await import("dotenv");
  await dotenv.config();
}
