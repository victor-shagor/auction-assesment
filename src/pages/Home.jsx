import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useGetAuctionProductsQuery } from "../services/products";

import AuctionCard from "../components/AuctionCard";
import NavBar from "../components/Navbar";
import CountDown from "../components/CountDown";
import Loader from "../components/Loader";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "30px",
    margin: "20px 20px",
    borderRadius: "8px",
    padding: "20px",
    border: "1px solid #EAECF0",
    fontFamily: "IBMPlexRegular",
  },
  typo: {
    fontStyle: "normal",
    fontWeight: 60,
    fontSize: "18px",
    fontFamily: "IBMPlexSemiBold",
  },
});

const Home = () => {
  const classes = useStyles();
  const { data, error, isLoading } = useGetAuctionProductsQuery();

  return (
    <>
      <NavBar />
      <CountDown />
      <Box className={classes.wrapper}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="10px"
        >
          <p className={classes.typo}>Featured Items</p>
          <Button
            disableElevation
            size="small"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#344054",
              backgroundColor: "white",
              border: "1px solid #D0D5DD",
              borderRadius: "8px",
              ":hover": {
                backgroundColor: "white",
              },
            }}
          >
            View Auction
          </Button>
        </Stack>
        <Divider sx={{ backgroundColor: "#EAECF0" }} />
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong, try again later
          </Alert>
        )}
        <Grid container spacing={2} justifyContent="center" marginTop="5px">
          {isLoading &&
            [...Array(8)].map((item, idx) => (
              <Grid item xs={12} md={3} key={idx} data-testid="loading-card">
                <Loader />
              </Grid>
            ))}
          {data &&
            data?.data.map((product, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <AuctionCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
