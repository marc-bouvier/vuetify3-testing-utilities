import { describe, expect, it } from "vitest";
import ACheckbox from "./ACheckbox.vue";
import { mountv } from "../testing-extensions/mountComponent";
import { renderv } from "../testing-extensions/renderComponent";

describe("tst", () => {
  describe("with testing library", () => {
    it("renders", () => {
      // use of custom "renderv()"
      // proxifying testing-library-vue "render()" with vuetify support
      const { getByLabelText, container } = renderv(ACheckbox);
      const checkbox = getByLabelText("testLabel");
      checkbox.click();
      expect(true).to.be.true;
    });
  });

  describe("with vue-test-utils", () => {
    it("should ", () => {
      // use of custom "mountv()"
      // proxifying vue-test-utils "mount()" with vuetify support
      const wrapper = mountv(ACheckbox);
      const selected = wrapper.findBySelector("test-selector");
      expect(true).to.be.true;
    });
  });
});
