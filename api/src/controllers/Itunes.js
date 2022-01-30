const { search } = require("../itunes");

let itunes = {};

itunes.albumsList = async (req, res) => {
  let { artist } = req.query;

  let { data } = await search(artist);
  let { resultCount, results } = data;

  res.status(200).json({
    resultCount,
    results,
  });
};

module.exports = itunes;
