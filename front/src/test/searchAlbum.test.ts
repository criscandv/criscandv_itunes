import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";

import SearchAlbum from "../components/SearchAlbum.vue";

describe("Card test", () => {
  test("Mount component card", async () => {
    expect(SearchAlbum).toBeTruthy();
  });

  test("Mount component card with props", async () => {
    const wrapper = mount(SearchAlbum);

    expect(wrapper.find("button").text()).toBe("Search");
  });
});
