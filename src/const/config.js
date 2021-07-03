import dotenv from "dotenv";

dotenv.config();

const env = process.env;

// console.log("env.REACT_APP_KAKAO_JS_KEY" + env.REACT_APP_KAKAO_JS_KEY);
export const KAKAO_KEY = env.REACT_APP_KAKAO_JS_KEY;
