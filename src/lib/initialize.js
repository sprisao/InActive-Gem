import { KAKAO_KEY } from "../const/config";

const { Kakao } = window;

function initialize() {
  // Kakao.init(KAKAO_KEY);
  Kakao.init("a55cbe246e4197001c00ac5306b45501");
}

export default initialize;
