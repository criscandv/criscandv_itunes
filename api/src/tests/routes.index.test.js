const request = require("supertest");
const app = require("../app");

describe("Test iTunes route", () => {
  test("Api responds correctly", async () => {
    const res = await request(app).get("/v1");

    expect(res.statusCode).toEqual(200);
  });

  test("iTunes list albums", async () => {
    const res = await request(app).get("/v1/albums/");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("resultCount");
    expect(res.body.resultCount).toBeGreaterThanOrEqual(1);
  });

  test("iTunes list albums by artist", async () => {
    const artist = "Bruno mars";
    const res = await request(app).get(`/v1/albums/?artist=${artist}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("resultCount");
    expect(res.body.resultCount).toBeGreaterThanOrEqual(1);
  });

  test("iTunes list albums by artist not results", async () => {
    const artist = "lorem ipsum dolor sit amet";
    const res = await request(app).get(`/v1/albums/?artist=${artist}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("resultCount");
    expect(res.body.resultCount).toBe(0);
    expect(res.body.results.length).toBe(0);
  });

  test("Not found url", async () => {
    const res = await request(app).get("/v1/route-not-found");

    expect(res.statusCode).toEqual(404);
  });
});
