const { search } = require("../itunes");

describe("Itunes request tests", () => {
  test("Get itunes data", async () => {
    let { data } = await search("mago de oz");
    let { resultCount, results } = data;

    expect(resultCount).toBeGreaterThanOrEqual(1);
    expect(results.length).toBeGreaterThanOrEqual(10);
  });

  test("iTunes data not found", async () => {
    let { data } = await search("lorem ipsum dolor sit amet");
    let { resultCount, results } = data;

    expect(resultCount).toBe(0);
    expect(results.length).toBe(0);
  });
});
