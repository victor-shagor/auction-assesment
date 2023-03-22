import { render, screen } from "@testing-library/react";
import AuctionCard from "../components/AuctionCard";

describe("Auction card component", () => {
  it("should render auction card", async () => {
    render(
      <AuctionCard
        product={{ name: "test name", bid: "N100", title: "test title" }}
      />
    );

    expect(screen.getByTestId("auction-card")).toBeInTheDocument();
    expect(screen.getByTestId("auction-title").innerHTML).toBe("test title");
  });

  it("should show correct initals in avatar", async () => {
    render(
      <AuctionCard
        product={{ name: "test name", bid: "N100", title: "test title" }}
      />
    );

    expect(screen.getByTestId("name-avatar").innerHTML).toBe("tn");
  });

  it("renders correctly", () => {
    const { container } = render(
      <AuctionCard product={{ title: "test title" }} />
    );
    expect(container).toMatchSnapshot();
  });
});
