import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";

import Card from "../components/Card.vue";

describe("Card test", () => {
  test("Mount component card", async () => {
    expect(Card).toBeTruthy();
  });

  test("Mount component card with props", async () => {
    const wrapper = mount(Card, {
      props: {
        img: "img.jpg",
        albumName: "albumName",
        artistName: "artistName",
        releaseDate: "releaseDate",
        artistViewUrl: "artistViewUrl",
        collectionViewUrl: "collectionViewUrl",
        genre: "genre",
        trackCount: "trackCount",
      },
    });

    expect(wrapper.find("img").attributes("src")).toBe("img.jpg");
  });
});
