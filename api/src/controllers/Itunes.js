const { search } = require("../itunes");
const { removeDuplicates } = require("../utils");

let itunes = {};

itunes.albumsList = async (req, res) => {
  let { artist } = req.query;

  let { data } = await search(artist);
  let { resultCount, results } = data;
  let filteredResults = removeDuplicates(results, "collectionName");

  res.status(200).json({
    resultCount: filteredResults.length,
    results: filteredResults,
  });
};

module.exports = itunes;
