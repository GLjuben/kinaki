const axios = require("axios").default;

const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// before we export middleware to add api-key before every request is made;
axiosConfig.interceptors.request.use((config) => {
  //if there arent any query params it puts empty object, if there are they just stay the same;
  config.params = config.params || {};
  config.params["api_key"] = process.env.API_KEY;
  return config;
});

module.exports = axiosConfig;
