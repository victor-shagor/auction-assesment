import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import AuctionCard from "../components/AuctionCard";
import NavBar from "../components/Navbar";
import CountDown from "../components/CountDown";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "30px",
    margin: "20px 20px",
    borderRadius: "8px",
    padding: "20px",
    border: "1px solid #EAECF0",
    fontFamily: "IBMPlexRegular"
  },
  btn: {
    textTransform: "none",
    color: "#344054",
    backgroundColor: "white",
    border: "1px solid #D0D5DD",
    borderRadius: "8px",
  },
  typo: {
    fontStyle: "normal",
    fontWeight: 60,
    fontSize: "18px",
    fontFamily: "IBMPlexSemiBold"
  },
});

const Home = () => {
  const classes = useStyles();

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
          sx={{textTransform: "none",
          color: "#344054",
          backgroundColor: "white",
          border: "1px solid #D0D5DD",
          borderRadius: "8px"}}
        >
          View Auction
        </Button>
      </Stack>
      <Divider sx={{backgroundColor:"#EAECF0"}}/>
      <Grid container spacing={2} justifyContent="center" marginTop="5px">
        <Grid item xs={12} md={3}>
          <AuctionCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <AuctionCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <AuctionCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <AuctionCard />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Home;
