import { renderv } from "@/testing-extensions/renderComponent";
import PageWithDialogView from "@/views/PageWithDialogView.vue";
import { cleanup } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Testing a dialog with testing library", () => {
  afterEach(cleanup);
  it("dialog opened", async () => {
    userEvent.setup();
    const { getByRole, getByTestId, getByText } = renderv(PageWithDialogView);
    const openDialogButton = getByRole("button", { name: "Open Dialog" });
    await userEvent.click(openDialogButton);

    // The 3 following queries returns the same element

    // query by recommended priority
    // https://testing-library.com/docs/queries/about#priority
    getByRole("dialog");
    getByText("DIALOG_V_CARD_TEXT");
    // With testing library, using a test id is last resort
    // prefer the previous queries when possible
    getByTestId("a-dialog");
  });

  it("dialog not opened", async () => {
    userEvent.setup();
    const { queryByRole, queryByTestId, queryByText } =
      renderv(PageWithDialogView);

    // The 3 following queries returns the same element

    // query by recommended priority
    // https://testing-library.com/docs/queries/about#priority
    expect(await queryByRole("dialog")).not.toBeInTheDocument();
    expect(await queryByText("DIALOG_V_CARD_TEXT")).not.toBeInTheDocument();
    // With testing library, using a test id is last resort
    // prefer the previous queries when possible
    expect(await queryByTestId("a-dialog")).not.toBeInTheDocument();
  });
});
