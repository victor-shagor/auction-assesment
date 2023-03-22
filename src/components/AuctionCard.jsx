import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    paddingTop: "10px",
    border: "1px solid #D0D5DD",
    borderRadius: "12px",
    fontFamily: "IBMPlexRegular !important"
  },
  box: {
    borderRadius: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    heigth: "200px",
  },
  avatar: {
    backgroundColor: "#F2F4F7 !important",
    color: "#475467 !important",
    fontSize: '14px !important',
    fontFamily: "IBMPlexRegular !important"
  },
  btn: {
    width: "100%",
    backgroundColor: "#004CCC !important",
    borderRadius: "8px !important",
    textTransform: "none !important",
    fontFamily: "IBMPlexRegular !important"
  },
  title:{
    fontFamily: "IBMPlexSemiBold"
  },
  name:{
    fontFamily: "IBMPlexSemiBold",
    fontSize: '12px'
  },
  nameSpan:{
    color: '#98A2B3',
    fontFamily: "IBMPlexRegular"
  },
  bid:{
    color: '#344054'
  }
});

const AuctionCard = ({ product }) => {
  const classes = useStyles();
  const { name, title, bid, image } = product
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join(".");
  return (
    <Card elevation={0} className={classes.card} >
      <Box className={classes.box}>
        <img src={image} alt="" style={{width: '95%'}}/>
      </Box>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          paddingBottom="5px"
        >
          <Avatar sx={{ width: 24, height: 24 }} className={classes.avatar}>{initials}</Avatar>
          <p className={classes.name}>{name} <span className={classes.nameSpan}>(Highest Bidder)</span></p>
        </Stack>
        <p className={classes.title}>
          {title}
        </p>
        <p className={classes.bid}>
          Current Bid: <span className={classes.title}>{bid}</span>
        </p>
        <Button variant="contained" disableElevation className={classes.btn}>
          Add to wishlist
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;
