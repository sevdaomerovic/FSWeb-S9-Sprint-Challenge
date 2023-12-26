import { render, screen } from "@testing-library/react";
import AppFunctional from "./AppFunctional";
import userEvent from "@testing-library/user-event";

// Write your tests here
beforeEach(() => {
  render(<AppFunctional />);
});

it("Yukarıya basınca koordinat metni düzgün değişiyor mu?", async () => {
  const upButton = screen.getByTestId("up-button");
  userEvent.click(upButton);
  const message = await screen.findByText(/1,2/);
  expect(message).toBeInTheDocument();
});
