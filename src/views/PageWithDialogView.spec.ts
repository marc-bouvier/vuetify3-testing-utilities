import { afterEach, describe, it } from "vitest";
import { renderv } from "@/testing-extensions/renderComponent";
import PageWithDialogView from "@/views/PageWithDialogView.vue";
import { cleanup } from "@testing-library/vue";

describe("A dialog", () => {
  afterEach(cleanup);

  // it("opens the dialog", async () => {
  //   const wrapper = mountv(PageWithDialogView);
  // });
  it("opens the dialog", async () => {
    // userEvent
    const { getByRole } = renderv(PageWithDialogView);
    getByRole("button", { name: "Open Dialog" });
  });
});
