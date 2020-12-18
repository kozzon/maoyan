//! 提前将数据请求写在这里
import request from "@/utils/request";
import api from "@/api";
// 热映的数据请求
export const hotReq = () =>
  request({
    url: api.hotApi,
    data: {
      token: "",
      optimus_uuid:
        "A894438019C611EB875C6BA4A34E53D824D58CC33E6143CBBEF9C5952036A865",
      optimus_risk_level: 71,
      optimus_code: 10,
    },
  });
