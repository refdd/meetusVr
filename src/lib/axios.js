import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-yeshtery.dev.meetusvr.com/v1",
  // withCredentials: true,
  // validateStatus: function (status) {
  //   return (status >= 200 && status < 300) || status === 401;
  // },
});

export default axiosInstance;
