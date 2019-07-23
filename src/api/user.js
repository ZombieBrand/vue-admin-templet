import axios from "./index";
export const login = ({ userName, password }) => {
  return axios.request({
    url: "/getUserInfo",
    method: "post",
    data: {
      userName,
      password
    }
  });
};
export const authorization = () => {
  return axios.request({
    url: "/authorization",
    method: "get"
  });
};
