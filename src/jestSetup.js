import { rest } from "msw";
import { setupServer } from "msw/node";

const mockresponse = {
  success: true,
  message: "Operation Successful",
  data: [
    {
      name: "John Doe",
      title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
      bid: "₦795,000",
      image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
    },
    {
      name: "Peter Doe",
      title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
      bid: "₦795,000",
      image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
    },
  ],
};

const handlers = [
  rest.get(
    "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
    (req, res, ctx) => {
      return res(ctx.json(mockresponse));
    }
  ),
];

const server = setupServer(...handlers);

export { server };
