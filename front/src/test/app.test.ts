import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";

import App from "../App.vue";

describe("App test", () => {
  test("Mount component app", async () => {
    expect(App).toBeTruthy();
  });
});
