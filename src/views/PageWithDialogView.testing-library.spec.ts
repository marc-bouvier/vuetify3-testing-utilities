import { renderv } from "@/testing-extensions/renderComponent";
import PageWithDialogView from "@/views/PageWithDialogView.vue";
import { cleanup } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { mountv } from "@/testing-extensions/mountComponent";

describe("Testing a dialog with testing library", () => {
  afterEach(cleanup);
  it("dialog opened", async () => {
    userEvent.setup();
    const { getByRole, getByTestId, getByText } = renderv(PageWithDialogView);
    const openDialogButton = getByRole("button", { name: "Open Dialog" });
    await userEvent.click(openDialogButton);

    // query by recommended priority
    // https://testing-library.com/docs/queries/about#priority
    getByRole("dialog");
    getByText("DIALOG_V_CARD_TEXT");
    getByTestId("a-dialog");
  });

  it("dialog not opened", async () => {
    userEvent.setup();
    const { queryByRole, queryByTestId, queryByText } =
      renderv(PageWithDialogView);

    // query by recommended priority
    // https://testing-library.com/docs/queries/about#priority
    expect(await queryByRole("dialog")).not.toBeInTheDocument();
    expect(await queryByText("DIALOG_V_CARD_TEXT")).not.toBeInTheDocument();
    expect(await queryByTestId("a-dialog")).not.toBeInTheDocument();
  });
});
