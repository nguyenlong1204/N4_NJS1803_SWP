import axios from "axios";
const httpRequest = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout:1000,
});
export const get = async (url, options = {}) => {
  const res = await httpRequest.get(url, options);
  return res.data;
};
export const post = async (url, data = {}, options = {}) => {
  const res = await httpRequest.post(url, data, options);
  return res.data;
};

const httpsIndexOnl = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_PRICE_URL,
});

export default { httpRequest, httpsIndexOnl };
