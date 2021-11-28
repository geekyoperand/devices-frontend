import AppConsts from "../constants/appConst";
import axios from "axios";

const qs = require("qs");

const http = axios.create({
  baseURL: AppConsts.remoteBaseUrl,
  timeout: 600000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

export default http;
