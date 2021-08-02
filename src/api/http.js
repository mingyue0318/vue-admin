import server from "@/utils/request.js";

export function getDate(params) {
  return server.request({
    url: process.env.VUE_APP_APIURL + "/publishapi/",
    method: "get", // default
    params,
  });
}
export function postDate(params) {
  return server.request({
    url: process.env.VUE_APP_APIURL + "/publishapi/",
    method: "post", // default
    params,
  });
}
