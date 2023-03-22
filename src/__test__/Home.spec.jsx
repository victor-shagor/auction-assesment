import { screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../jestSetup";
import Home from "../pages/Home";
import { renderWithProviders } from "../testUtils";

describe("App", () => {
  it("should render two product since mock response returns two products", async () => {
    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(screen.getAllByTestId("auction-card").length).toBe(2);
      expect(screen.getByTestId("countdown")).toBeInTheDocument();
    });
  });
  it("should render a toast error if api returns an error", async () => {
    server.use(
      rest.get(
        "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
        (_req, res, ctx) => {
          return res(ctx.status(500), ctx.json("an error has occurred"));
        }
      )
    );

    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText(/Something went wrong, try again later/i)
      ).toBeInTheDocument();
    });
  });
  it("renders correctly", () => {
    const { container } = renderWithProviders(<Home />);
    expect(container).toMatchSnapshot();
  });
});
