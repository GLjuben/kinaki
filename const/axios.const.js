const axios = require("axios").default;

const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosConfig.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = process.env.API_KEY;
  return config;
});

module.exports = axiosConfig;
