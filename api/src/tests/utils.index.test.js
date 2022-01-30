const { removeDuplicates } = require("../utils");

describe("Test utils module", () => {
  test("Remove duplicate objects", async () => {
    let myArr = [
      { id: 1, name: "test1" },
      { id: 2, name: "test2" },
      { id: 1, name: "test1" },
      { id: 3, name: "test3" },
    ];

    let arrFiltered = removeDuplicates(myArr, "id");
    expect(arrFiltered.length).toEqual(3);
  });
});
