import { renderv } from "@/testing-extensions/renderComponent";
import AVSystemBar from "@/application-components/AVSystemBar.vue";
import { mountv } from "@/testing-extensions/mountComponent";

describe("AVSystemBar", () => {
  it("with vue-test-utils", () => {
    const wrapper = mountv(AVSystemBar);
    expect(wrapper.text()).toContain("3:13PM");
  });
  it("with testing-library", () => {
    const { getByText } = renderv(AVSystemBar);
    getByText("3:13PM");
  });
});
