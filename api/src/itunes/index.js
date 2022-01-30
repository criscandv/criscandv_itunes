const axios = require("axios");

let itunesApi = {};
const baseUrl = "https://itunes.apple.com";

itunesApi.search = async (artist) => {
  if (!artist) {
    artist = "mago de oz";
  }
  let url = `${baseUrl}/search?term=${artist}&entity=album`;

  let response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

module.exports = itunesApi;
