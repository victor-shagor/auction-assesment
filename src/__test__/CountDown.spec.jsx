import { render, screen } from "@testing-library/react";
import CountDown from "../components/CountDown";

describe("countdown component", () => {
  it("should render countdown component", async () => {
    render(<CountDown />);

    expect(screen.getByTestId("countdown")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const { container } = render(
      <CountDown product={{ title: "test title" }} />
    );
    expect(container).toMatchSnapshot();
  });
});
